import React, { useState } from "react";
// import Grid from "@mui/material/Grid2";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Checkbox,
  Grid,
  Button,
  FormControlLabel,
  Paper,
  FormHelperText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCorrespondenceAddress,
  updateResidenceAddress,
  updateContact,
  updateDomicileAddress,
} from "../store/contactSlice";
import CoApplicantTable from "./CoApplicantTable";

const emirates = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];
const residenceTypes = ["Owner", "Rented", "Company Provided"];
const communicationModes = ["Email", "Phone", "SMS"];
const languages = ["English", "Arabic"];

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactDetails = useSelector((state) => state.contact);
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateNumeric = (value) => /^\d+$/.test(value);
  const validatePhoneNumber = (value) => /^\d{9}$/.test(value);
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateField = (name, value, section) => {
    let error = "";

    // Required field validation
    if (!value && ["poBox", "emirate", "area"].includes(name)) {
      return "Field is mandatory";
    }

    switch (name) {
      case "poBox":
        if (value && !validateNumeric(value)) {
          error = "Only numeric values are allowed";
        }
        break;
      case "homeTel":
      case "mobileTel":
      case "faxNo":
      case "otherTel":
        if (value && !validatePhoneNumber(value)) {
          error = "Must be exactly 9 digits";
        }
        break;
      case "email":
      case "alternateEmail":
        if (value && !validateEmail(value)) {
          error = "Invalid email format";
        }
        break;
    }

    return error;
  };

  const handleSubmit = () => {
    const allFieldsValid = Object.keys(contactDetails).every((section) => {
      return Object.keys(contactDetails[section]).every((field) => {
        const value = contactDetails[section][field];
        const error = validateField(field, section, value);
        return !error;
      });
    });

    if (allFieldsValid) {
      console.log("Form submitted successfully:", contactDetails);
    } else {
      console.error("Form contains errors");
    }
  };

  const handleChange = (field, section, value) => {
    // Validate the field
    const error = validateField(field, value, section);
    setErrors((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: error,
      },
    }));

    // Update the store
    const updateAction = {
      correspondenceAddress: updateCorrespondenceAddress,
      residenceAddress: updateResidenceAddress,
      contact: updateContact,
      domicileAddress: updateDomicileAddress,
    }[section];

    if (updateAction) {
      dispatch(updateAction({ [field]: value }));
    }
  };

  const handleSameAsCorrespondence = (checked) => {
    dispatch(updateDomicileAddress({ sameAsCorrespondence: checked }));
    if (checked) {
      dispatch(
        updateDomicileAddress({
          poBox: contactDetails.correspondenceAddress.poBox,
          emirate: contactDetails.correspondenceAddress.emirate,
          area: contactDetails.correspondenceAddress.area,
        })
      );
    }
  };


  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    '& .MuiFormControl-root': {
      flex: 1
    }
  };

  return (
    <div>
      <Box sx={{ p: 1 }}>
        <Typography variant="h5" color="black" gutterBottom>
          Contact Details
        </Typography>

        {/* Correspondence Address */}
        <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black" }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Correspondence Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '120px' }}>P.O Box No.:</Typography>
                <TextField
                  fullWidth
                  label="P.O. Box No."
                  value={contactDetails.correspondenceAddress.poBox}
                  onChange={(e) =>
                    handleChange(
                      "poBox",
                      "correspondenceAddress",
                      e.target.value
                    )
                  }
                  error={!!errors?.correspondenceAddress?.poBox}
                  helperText={errors?.correspondenceAddress?.poBox}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Emirate:</Typography>
                <FormControl
                  fullWidth
                  error={!!errors?.correspondenceAddress?.emirate}
                  required
                >
                  <InputLabel>Emirate</InputLabel>
                  <Select
                    value={contactDetails.correspondenceAddress.emirate}
                    label="Emirate"
                    onChange={(e) =>
                      handleChange(
                        "emirate",
                        "correspondenceAddress",
                        e.target.value
                      )
                    }
                  >
                    {emirates.map((emirate) => (
                      <MenuItem key={emirate} value={emirate}>
                        {emirate}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors?.correspondenceAddress?.emirate && (
                    <FormHelperText>
                      {errors.correspondenceAddress.emirate}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Area:</Typography>
                <TextField
                  fullWidth
                  label="Area"
                  value={contactDetails.correspondenceAddress.area}
                  onChange={(e) =>
                    handleChange(
                      "area",
                      "correspondenceAddress",
                      e.target.value
                    )
                  }
                  error={!!errors?.correspondenceAddress?.area}
                  helperText={errors?.correspondenceAddress?.area}
                  required
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* Residence/Company Address */}
        <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black" }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Residence/Company Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Flat/Villa No. :</Typography>
                <TextField
                  fullWidth
                  label="Flat/Villa No."
                  value={contactDetails.residenceAddress.flatVillaNo}
                  onChange={(e) =>
                    handleChange(
                      "flatVillaNo",
                      "residenceAddress",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Building Name :</Typography>
                <TextField
                  fullWidth
                  label="Building Name"
                  value={contactDetails.residenceAddress.buildingName}
                  onChange={(e) =>
                    dispatch(
                      updateResidenceAddress({ buildingName: e.target.value })
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Street Name :</Typography>
                <TextField
                  fullWidth
                  label="Street Name"
                  value={contactDetails.residenceAddress.streetName}
                  onChange={(e) =>
                    dispatch(
                      updateResidenceAddress({ streetName: e.target.value })
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>P.O Box No. :</Typography>
                <TextField
                  fullWidth
                  label="P.O. Box No."
                  value={contactDetails.correspondenceAddress.poBox}
                  onChange={(e) =>
                    dispatch(
                      updateCorrespondenceAddress({ poBox: e.target.value })
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Emirate:</Typography>
                <FormControl fullWidth>
                  <InputLabel>Emirate</InputLabel>
                  <Select
                    value={contactDetails.correspondenceAddress.emirate}
                    label="Emirate"
                    onChange={(e) =>
                      dispatch(
                        updateCorrespondenceAddress({ emirate: e.target.value })
                      )
                    }
                  >
                    {emirates.map((emirate) => (
                      <MenuItem key={emirate} value={emirate}>
                        {emirate}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Area:</Typography>
                <TextField
                  fullWidth
                  label="Area"
                  value={contactDetails.correspondenceAddress.area}
                  onChange={(e) =>
                    dispatch(
                      updateCorrespondenceAddress({ area: e.target.value })
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Community No. :</Typography>
                <TextField
                  fullWidth
                  label="Community No."
                  value={contactDetails.residenceAddress.communityNo}
                  onChange={(e) =>
                    dispatch(
                      updateResidenceAddress({ communityNo: e.target.value })
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Nearest Landmark :</Typography>
                <TextField
                  fullWidth
                  label="Nearest Landmark"
                  value={contactDetails.residenceAddress.nearestLandmark}
                  onChange={(e) =>
                    dispatch(
                      updateResidenceAddress({
                        nearestLandmark: e.target.value,
                      })
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Residence Type :</Typography>
                <FormControl fullWidth>
                  <InputLabel>Residence Type</InputLabel>
                  <Select
                    value={contactDetails.residenceAddress.residenceType}
                    label="Residence Type"
                    onChange={(e) =>
                      dispatch(
                        updateResidenceAddress({
                          residenceType: e.target.value,
                        })
                      )
                    }
                  >
                    {residenceTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Home Tel. No. :</Typography>

                <TextField
                  fullWidth
                  label="Home Tel. No."
                  value={contactDetails.contact.homeTel}
                  onChange={(e) =>
                    handleChange("homeTel", "contact", e.target.value)
                  }
                  error={!!errors?.contact?.homeTel}
                  helperText={errors?.contact?.homeTel}
                  inputProps={{ maxLength: 9 }}
                />
              </Grid>

              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Mobile Tel. No. :</Typography>

                <TextField
                  fullWidth
                  label="Mobile Tel. No."
                  value={contactDetails.contact.mobileTel}
                  onChange={(e) =>
                    dispatch(updateContact({ mobileTel: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Fax No. :</Typography>

                <TextField
                  fullWidth
                  label="Fax No."
                  value={contactDetails.contact.faxNo}
                  onChange={(e) =>
                    dispatch(updateContact({ faxNo: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Other Tel. No. :</Typography>
                <TextField
                  fullWidth
                  label="Other Tel. No."
                  value={contactDetails.contact.otherTel}  // Changed from faxNo
                  onChange={(e) =>
                    dispatch(updateContact({ otherTel: e.target.value }))  // Changed from faxNo
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Email :</Typography>

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={contactDetails.contact.email}
                  onChange={(e) =>
                    handleChange("email", "contact", e.target.value)
                  }
                  error={!!errors?.contact?.email}
                  helperText={errors?.contact?.email}
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Alternate Email :</Typography>

                <TextField
                  fullWidth
                  label="Alternate Email"
                  type="email"
                  value={contactDetails.contact.alternateEmail}
                  onChange={(e) =>
                    dispatch(updateContact({ alternateEmail: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Preferred Mode of Communication :</Typography>

                <FormControl fullWidth>
                  <InputLabel>Preferred Mode of Communication</InputLabel>
                  <Select
                    value={contactDetails.contact.preferredMode}
                    label="Preferred Mode of Communication"
                    onChange={(e) =>
                      dispatch(updateContact({ preferredMode: e.target.value }))
                    }
                  >
                    {communicationModes.map((mode) => (
                      <MenuItem key={mode} value={mode}>
                        {mode}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} sx={labelStyle}>
                <Typography component="span" sx={{ minWidth: '50px' }}>Preferred Language :</Typography>

                <FormControl fullWidth>
                  <InputLabel>Preferred Language</InputLabel>
                  <Select
                    value={contactDetails.contact.preferredLanguage}
                    label="Preferred Language"
                    onChange={(e) =>
                      dispatch(
                        updateContact({ preferredLanguage: e.target.value })
                      )
                    }
                  >
                    {languages.map((language) => (
                      <MenuItem key={language} value={language}>
                        {language}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} p={1} sx={labelStyle}>
              <Typography component="span" sx={{ minWidth: '50px' }}>Permanent Address & Home Country Tel. No. :</Typography>
              <TextField
                fullWidth
                label="Permanent Address & Home Country Tel. No."
                value={contactDetails.contact.permanentAddress}  // Changed from faxNo
                onChange={(e) =>
                  dispatch(updateContact({ permanentAddress: e.target.value }))  // Changed from faxNo
                }
              />
            </Grid>
          </Box>
        </Paper>

        {/* Domicile Address */}
        <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black" }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Domicile Address
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={contactDetails.domicileAddress.sameAsCorrespondence}
                  onChange={(e) => handleSameAsCorrespondence(e.target.checked)}
                />
              }
              label="Same as Correspondence Address"
            />
            {!contactDetails.domicileAddress.sameAsCorrespondence && (
              <Grid container spacing={2}>
                {/* Domicile address fields with validation */}
                <Grid item xs={12} sm={4} sx={labelStyle}>
                  <Typography component="span" sx={{ minWidth: '50px' }}>P.O. Box No. :</Typography>

                  <TextField
                    fullWidth
                    label="P.O. Box No."
                    value={contactDetails.domicileAddress.poBox}
                    onChange={(e) =>
                      handleChange("poBox", "domicileAddress", e.target.value)
                    }
                    error={!!errors?.domicileAddress?.poBox}
                    helperText={errors?.domicileAddress?.poBox}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4} sx={labelStyle}>
                  <Typography component="span" sx={{ minWidth: '50px' }}>Emirate :</Typography>

                  <FormControl fullWidth>
                    <InputLabel>Emirate</InputLabel>
                    <Select
                      value={contactDetails.domicileAddress.emirate}
                      label="Emirate"
                      onChange={(e) =>
                        dispatch(
                          updateDomicileAddress({ emirate: e.target.value })
                        )
                      }
                    >
                      {emirates.map((emirate) => (
                        <MenuItem key={emirate} value={emirate}>
                          {emirate}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} sx={labelStyle}>
                  <Typography component="span" sx={{ minWidth: '50px' }}>Area:</Typography>
                  <TextField
                    fullWidth
                    label="Area"
                    value={contactDetails.domicileAddress.area}
                    onChange={(e) =>
                      dispatch(updateDomicileAddress({ area: e.target.value }))
                    }
                  />
                </Grid>
                {/* Add other domicile address fields... */}
              </Grid>
            )}
          </Box>
        </Paper>

        <CoApplicantTable />
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
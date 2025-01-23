import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
  Paper,
  FormHelperText,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCorrespondenceAddress,
  updateResidenceAddress,
  updateContact,
  updateDomicileAddress,
  resetForm,
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

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactDetails = useSelector((state) => state.contact);
  const [errors, setErrors] = useState({});
  const languages = ["English", "Arabic"];
  const residenceTypes = ["Owner", "Rented", "Company Provided"];
  const communicationModes = ["Email", "Phone", "SMS"];

  const validateField = (name, value) => {
    let error = "";

    if (!value && ["poBox", "emirate", "area"].includes(name)) {
      return "This field is mandatory";
    }

    switch (name) {
      case "poBox":
        if (value && !/^\d+$/.test(value)) {
          error = "Only numeric values are allowed";
        }
        break;
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (field, section, value) => {
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: error,
      },
    }));

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

  const handleSubmit = () => {
    const hasErrors = Object.values(errors).some((section) =>
      Object.values(section || {}).some((error) => error)
    );

    if (!hasErrors) {
      console.log("Form submitted successfully:", contactDetails);
    } else {
      console.error("Please fix the errors in the form");
    }
  };

  const handleCancel = () => {
    dispatch(resetForm());
  };

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    "& .MuiFormControl-root": {
      flex: 1,
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Contact Details
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          Correspondence Address
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={labelStyle}>
            <TextField
              fullWidth
              label="P.O. Box No."
              value={contactDetails.correspondenceAddress.poBox}
              onChange={(e) =>
                handleChange("poBox", "correspondenceAddress", e.target.value)
              }
              error={!!errors?.correspondenceAddress?.poBox}
              helperText={errors?.correspondenceAddress?.poBox}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl
              fullWidth
              error={!!errors?.correspondenceAddress?.emirate}
            >
              <InputLabel>Emirate</InputLabel>
              <Select
                value={contactDetails.correspondenceAddress.emirate}
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
              <FormHelperText>
                {errors?.correspondenceAddress?.emirate}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Area"
              value={contactDetails.correspondenceAddress.area}
              onChange={(e) =>
                handleChange("area", "correspondenceAddress", e.target.value)
              }
              error={!!errors?.correspondenceAddress?.area}
              helperText={errors?.correspondenceAddress?.area}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Residence/Company Address */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black" }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Residence/Company Address
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Mobile Tel. No."
                value={contactDetails.contact.mobileTel}
                onChange={(e) =>
                  dispatch(updateContact({ mobileTel: e.target.value }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Fax No."
                value={contactDetails.contact.faxNo}
                onChange={(e) =>
                  dispatch(updateContact({ faxNo: e.target.value }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Other Tel. No."
                value={contactDetails.contact.otherTel} // Changed from faxNo
                onChange={
                  (e) => dispatch(updateContact({ otherTel: e.target.value })) // Changed from faxNo
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4} p={1}>
            <TextField
              fullWidth
              label="Permanent Address & Home Country Tel. No."
              value={contactDetails.contact.permanentAddress}
              onChange={(e) =>
                dispatch(updateContact({ permanentAddress: e.target.value }))
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
              <Grid item xs={12} sm={4}>
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
              <Grid item xs={12} sm={4}>
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
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Area"
                  value={contactDetails.domicileAddress.area}
                  onChange={(e) =>
                    dispatch(updateDomicileAddress({ area: e.target.value }))
                  }
                />
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>
      <CoApplicantTable />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="contained" onClick={handleCancel}>
        Cancel
      </Button>
    </Box>
  );
}

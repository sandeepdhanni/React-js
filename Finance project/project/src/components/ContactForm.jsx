import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper,
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
const residenceTypes = ["Apartment", "Villa", "House", "Other"];
const communicationModes = ["Email", "Phone", "SMS"];
const languages = ["English", "Arabic"];

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactDetails = useSelector((state) => state.contact);

  return (
    <div>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="black" gutterBottom>
          Contact Details
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black",  }} >
          {/* Correspondence Address */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Correspondence Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                P.O Box No. :
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
                Emirate:
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
                Area:
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
            </Grid>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black", }}>
          {/* Residence/Company Address */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Residence/Company Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                Flat/Villa No. :
                <TextField
                  fullWidth
                  label="Flat/Villa No."
                  value={contactDetails.residenceAddress.flatVillaNo}
                  onChange={(e) =>
                    dispatch(
                      updateResidenceAddress({ flatVillaNo: e.target.value })
                    )
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                Building Name :
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
                Street Name :
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
                P.O Box No. :
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
                Emirate:
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
                Area:
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
                Community No. :
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
                Nearest Landmark :
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
                Residence Type :
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
            </Grid>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                Home Tel. No. :
                <TextField
                  fullWidth
                  label="Home Tel. No."
                  value={contactDetails.contact.homeTel}
                  onChange={(e) =>
                    dispatch(updateContact({ homeTel: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                Mobile Tel. No. :
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
                Fax No. :
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
                Other Tel. No. :
                <TextField
                  fullWidth
                  label="Text"
                  value={contactDetails.contact.faxNo}
                  onChange={(e) =>
                    dispatch(updateContact({ faxNo: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                Email :
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={contactDetails.contact.email}
                  onChange={(e) =>
                    dispatch(updateContact({ email: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                Alternate Email :
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
                Preferred Mode of Communication :
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
                Preferred Language :
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
            <Grid item xs={12} sm={4}>
              Permanent Address & Home Country Tel. No. :
              <TextField
                fullWidth
                label="Text"
                value={contactDetails.contact.faxNo}
                onChange={(e) =>
                  dispatch(updateContact({ faxNo: e.target.value }))
                }
              />
            </Grid>
          </Box>
        </Paper>

        {/* Domicile Address */}
        <Paper elevation={3} sx={{ p: 3, mb: 3, border: "1px solid black", }}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Domicile Address
            </Typography>
            Same as Correspondence Address?
            <FormControlLabel
              control={
                <Checkbox
                  checked={contactDetails.domicileAddress.sameAsCorrespondence}
                  onChange={(e) =>
                    dispatch(
                      updateDomicileAddress({
                        sameAsCorrespondence: e.target.checked,
                      })
                    )
                  }
                />
              }
            />
            {!contactDetails.domicileAddress.sameAsCorrespondence && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  P.O. Box No. :
                  <TextField
                    fullWidth
                    label="P.O. Box No."
                    value={contactDetails.domicileAddress.poBox}
                    onChange={(e) =>
                      dispatch(updateDomicileAddress({ poBox: e.target.value }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  Emirate :
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
                  Area :
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
        {/* Co Applicant/Shareholder List Table */}
        <CoApplicantTable />
      </Box>
    </div>
  );
}

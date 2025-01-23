import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  coApplicants: [],
  correspondenceAddress: {
    poBox: "",
    emirate: "",
    area: "",
  },
  residenceAddress: {
    flatVillaNo: "",
    buildingName: "",
    streetName: "",
    communityNo: "",
    nearestLandmark: "",
    residenceType: "",
  },
  domicileAddress: {
    poBox: "",
    emirate: "",
    area: "",
    sameAsCorrespondence: false,
  },
  contact: {
    homeTel: "",
    mobileTel: "",
    faxNo: "",
    otherTel: "",
    email: "",
    alternateEmail: "",
    preferredMode: "",
    preferredLanguage: "",
    permanentAddress:"",
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateCorrespondenceAddress: (state, action) => {
      state.correspondenceAddress = {
        ...state.correspondenceAddress,
        ...action.payload,
      };
    },
    updateResidenceAddress: (state, action) => {
      state.residenceAddress = {
        ...state.residenceAddress,
        ...action.payload,
      };
    },
    updateDomicileAddress: (state, action) => {
      state.domicileAddress = {
        ...state.domicileAddress,
        ...action.payload,
      };
    },
    updateContact: (state, action) => {
      state.contact = {
        ...state.contact,
        ...action.payload,
      };
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const {
  updateCorrespondenceAddress,
  updateResidenceAddress,
  updateDomicileAddress,
  updateContact,
  resetForm,
} = contactSlice.actions;

export default contactSlice.reducer;

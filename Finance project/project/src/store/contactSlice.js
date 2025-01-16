import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  correspondenceAddress: {
    poBox: '',
    emirate: '',
    area: '',
  },
  residenceAddress: {
    flatVillaNo: '',
    buildingName: '',
    streetName: '',
    poBox: '',
    emirate: '',
    area: '',
    communityNo: '',
    nearestLandmark: '',
    residenceType: '',
  },
  contact: {
    homeTel: '',
    mobileTel: '',
    faxNo: '',
    otherTel: '',
    email: '',
    alternateEmail: '',
    preferredMode: '',
    preferredLanguage: '',
    permanentAddressHomeCountryTel: '',
  },
  domicileAddress: {
    sameAsCorrespondence: false,
    poBox: '',
    emirate: '',
    area: '',
  },
  coApplicants: []
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateCorrespondenceAddress: (state, action) => {
      state.correspondenceAddress = { ...state.correspondenceAddress, ...action.payload };
    },
    updateResidenceAddress: (state, action) => {
      state.residenceAddress = { ...state.residenceAddress, ...action.payload };
    },
    updateContact: (state, action) => {
      state.contact = { ...state.contact, ...action.payload };
    },
    updateDomicileAddress: (state, action) => {
      state.domicileAddress = { ...state.domicileAddress, ...action.payload };
      if (state.domicileAddress.sameAsCorrespondence) {
        state.domicileAddress = {
          ...state.domicileAddress,
          poBox: state.correspondenceAddress.poBox,
          emirate: state.correspondenceAddress.emirate,
          area: state.correspondenceAddress.area,
        };
      }
    },
    addCoApplicant: (state, action) => {
        state.coApplicants.push(action.payload);
      },
  },
});

export const {
  updateCorrespondenceAddress,
  updateResidenceAddress,
  updateContact,
  updateDomicileAddress,
  addCoApplicant,
} = contactSlice.actions;

export default contactSlice.reducer;

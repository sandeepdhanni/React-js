// Defining the structure as plain objects in JavaScript
const ContactDetails = {
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
    coApplicants: [],
  };
  
  const CoApplicant = {
    id: '',
    name: '',
    contactDetails: '',
    professionIncome: '',
    assetLiabilitiesBankDetails: '',
  };
  
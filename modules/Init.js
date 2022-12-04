const pathDocs = '../docs'

const fileCountries = `${pathDocs}/countries.txt`
const fileBabyNames2022 = `${pathDocs}/countries.txt`
const fileBabyNames1880 = `${pathDocs}/countries.txt`

// console.log(fileCountries)

const init = {
  fileCountries, fileBabyNames1880, fileBabyNames2022,
  slurpFile: () => {
    console.log("HI")
  }
  
}

export default init
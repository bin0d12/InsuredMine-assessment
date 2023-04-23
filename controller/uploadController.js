const uploadFileModel = require("../modal/uploadCsvFileModel");

// const csv = require('csv-parser')
const csv = require("csvtojson");

const uploadFileFun = async (req, res) => {
  try {
    let uploadData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (let i = 0; i < response.length; i++) {
          uploadData.push({
            agent: response[i].agent,
            userType: response[i].userType,
            policy_mode: response[i].policy_mode,
            producer: response[i].producer,
            policy_number: response[i].policy_number,
            premium_amount_written: response[i].premium_amount_written,
            premium_amount: response[i].premium_amount,
            policy_type: response[i].policy_type,
            company_name: response[i].company_name,
            category_name: response[i].category_name,
            policy_start_date: response[i].policy_start_date,
            policy_end_date: response[i].policy_end_date,
            csr: response[i].csr,
            account_name: response[i].account_name,
            email: response[i].email,
            gender: response[i].gender,
            firstname: response[i].firstname,
            city: response[i].city,
            account_type: response[i].account_type,
            phone: response[i].phone,
            address: response[i].address,
            state: response[i].state,
            zip: response[i].zip,
            dob: response[i].dob,
            primary: response[i].primary,
            applicantID: response[i].applicantID,
            agency_id: response[i].agency_id,
            hasActiveClientPolicy: response[i].hasActiveClientPolicy,
          });
        }
        await uploadFileModel.insertMany(uploadData);
        console.log(response);
      });
    res.send({ status: 200, success: true, msg: "running successfully" });
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
};

module.exports = { uploadFileFun };

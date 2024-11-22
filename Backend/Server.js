
const {isAuthenticated} =require("./isAuthenticated");
const express = require('express');
const nodemailer = require('nodemailer');
const mysql=require("mysql");
const cors=require("cors");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./dbConnection');

const app=express();
app.use(cors({
    origin: '*',
    allowedHeaders: ['Authorization', 'Content-Type', 'Accept'],
}));
app.use(express.json());
app.use(bodyParser.json());


    
    app.get('/',(req,res)=>{
        const sql="SELECT *FROM ";
        db.query(sql, (err,result)=>{
            if(err) return res.json({Message:"error in server"});
            return res.json(result);
    
        })
    })

 //user signup   
app.post('/Signup',(req,res)=>{
    const sql = "INSERT INTO signup (`user_name`, `user_email`, `user_password`) VALUES (?)";

    const values=[req.body.user_name,req.body.user_email,req.body.user_password]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})

//login

app.post('/Login',(req,res)=>{
    const sql = "SELECT * FROM signup WHERE `user_email`= ? AND `user_password`= ?";
    
    db.query(sql,[req.body.user_email,req.body.user_password],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        if(data.length>0)
            {
                console.log(data);
            const token = jwt.sign({id:data[0].id},"Resham",{expiresIn:"20d"})
            return res.status(200).json({
                message: "login sucessfully",
                token:token

            });
        }
        else{
            return res.json("fail");
        }
    })
    })


// admin dashboard
app.get('/admindashboard',(req,res)=>{
    const sql="SELECT *FROM patient";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"error in server"});
        return res.json(result);

    })
})



// patient request

app.get('/requestblood', (req, res) => {
    const sql = "SELECT * FROM patient";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "error in server" });
        return res.json(result);
    });
});

app.post('/requestblood', isAuthenticated, (req, res) => {
    const id = req.user.id
    console.log(id)
    const patientValues = [
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.group,
        req.body.gender,
        req.body.phone,
        req.body.address,
        req.body.unit,
        user_id=id
    ];
    console.log(patientValues)
    const patientSql = "INSERT INTO patient (`patient_name`,`patient_email`, `patient_age`, `patient_group`, `patient_gender`, `patient_phone`, `patient_address`, `patient_unit`, `status`, `user_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending',?)";

    db.query(patientSql, patientValues, (err, result) => {
        if (err) {
            return res.json(err);
        }

        const p_id = result.insertId; // Get the auto-generated p_id from the patient insertion

        const bloodValues = [
            req.body.group,
            req.body.unit,
            p_id
        ];

        const bloodSql = "INSERT INTO blood (`bloodgroup`, `units`, `patient_id`) VALUES (?, ?, ?)";

        db.query(bloodSql, bloodValues, (err, result) => {
            if (err) {
                return res.json(err);
            }
            return res.json(result);
        });
    });
});

app.get('/getBloodRequest',isAuthenticated, async(req, res) => {
    const user_id = req.user.id
    const patientSql = "SELECT * from patient where user_id = ?;"

    db.query(patientSql, user_id, (err, result) => {
        if (err) {
            return res.json(err);
        }else{
            res.status(200).json({
                message: "patient successfully",
                data: result
            })
        }

} )
})
app.get('/patient/:id', (req, res) => {
    const patientId = req.params.id;
    const sql = "SELECT * FROM patient WHERE patient_id = ?";
    db.query(sql, [patientId], (err, result) => {
        if (err) {
            return res.json({ error: err.message });
        }
        if (result.length === 0) {
            return res.json({ error: "Patient not found" });
        }
        return res.json(result[0]); // Assuming you fetch only one patient
    });
});



// admin approving

// app.put('/approve/:id', (req, res) => {
//     const patientId = req.params.id;
//     const updateSql = "UPDATE patient SET status = 'approved' WHERE patient_id = ?";
//     db.query(updateSql, [patientId], (err, result) => {
//         if (err) {
//             return res.json({ Message: "Error in server" });
//         }
//         return res.json({ Message: "Request approved successfully" });
//     });
// });


// donor
app.post('/donateblood', (req, res) => {
    const donorValues = [
        req.body.donor_name,
        req.body.donor_age,
        req.body.donor_group,
        req.body.donor_gender,
        req.body.donor_phone,
        req.body.donor_address,
        req.body.bloodbank_name,
    ];

    const donorSql = "INSERT INTO donor (`donor_name`, `donor_age`, `donor_group`, `donor_gender`, `donor_phone`, `donor_address`, `bloodbank_name`) VALUES (?)";
    
    db.query(donorSql, [donorValues], (err, result) => {
        if (err) {
            return res.json(err);
        }

        const donorId = result.insertId;

        const bloodValues = [
            req.body.bloodbank_name,
            donorId
        ];

        const bloodSql = "INSERT INTO bloodbank (`bloodbank_name`, `donor_id`) VALUES (?, ?)";

        db.query(bloodSql, bloodValues, (err, result) => {
            if (err) {
                return res.json(err);
            }
            return res.json(result);
        });
    });
});

// donor list fetching

app.get('/donatelist', (req, res) => {
    const sql = "SELECT * FROM donor";
    db.query(sql, (err, result) => {
        if (err) {
            return res.json({ Message: "error in server" });
        }
        return res.json(result);
    });
});


 //admin signup   
 app.post('/adminsignup',(req,res)=>{
    const sql = "INSERT INTO admin_signup (`Admin_name`, `Admin_email`, `Admin_password`,`bloodbank_id`) VALUES (?)";

    const values=[req.body.Admin_name,req.body.Admin_email,req.body.Admin_password,req.body.bloodbank_id]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.error("Error executing SQL query:", err);
            return res.json("error");
        }
        return res.json(data);
    })
})



// admin login and fetching bloodbank details with ID

app.post('/adminlogin', (req, res) => {
    const { Admin_email, Admin_password } = req.body;
    const sql = "SELECT Admin_id, bloodbank_id FROM admin_signup WHERE Admin_email = ? AND Admin_password = ?";
    db.query(sql, [Admin_email, Admin_password], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.json({ status: 'error', message: 'Error in server' });
        }
        if (result.length > 0) {
            const bloodbank_id = result[0].bloodbank_id;
            const sqlBloodBank = "SELECT * FROM bloodbank WHERE bloodbank_id = ?";
            db.query(sqlBloodBank, [bloodbank_id], (err, bloodBankResult) => {
                if (err) {
                    console.error("Error executing SQL query:", err);
                    return res.json({ status: 'error', message: 'Error in server' });
                }
                if (bloodBankResult.length > 0) {
                    const adminData = { admin_email: Admin_email };
                    const bloodBankData = bloodBankResult[0];
                    return res.json({ status: 'success', adminData, bloodBankData });
                } else {
                    return res.json({ status: 'error', message: 'Blood bank details not found' });
                }
            });
        } else {
            return res.json({ status: 'error', message: 'Invalid email or password' });
        }
    });
});



// has table

app.get('/has', (req, res) => {
    const sql = "SELECT * FROM donor";
    db.query(sql, (err, result) => {
        if (err){

        return res.json({ Message: "error in server" });
    }
        return res.json(result);
    });
});
// console.log(result);

// admin creats patient

app.post('/adminCreate', (req, res) => {
    const patientValues = [
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.group,
        req.body.gender,
        req.body.phone,
        req.body.address,
        req.body.unit
    ];

    const patientSql = "INSERT INTO patient (`patient_name`, `patient_email`,`patient_age`, `patient_group`, `patient_gender`, `patient_phone`, `patient_address`, `patient_unit`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')";

    db.query(patientSql, patientValues, (err, result) => {
        if (err) {
            return res.json(err);
        }

        const p_id = result.insertId; // Get the auto-generated p_id from the patient insertion

        const bloodValues = [
            req.body.group,
            req.body.unit,
            p_id
        ];

        const bloodSql = "INSERT INTO blood (`bloodgroup`, `units`, `patient_id`) VALUES (?, ?, ?)";

        db.query(bloodSql, bloodValues, (err, result) => {
            if (err) {
                return res.json(err);
            }
            return res.json(result);
        });
    });
});


// Delete operation for the 'has' table

app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM has WHERE bloodbank_id=? ";
    const id=req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Message: "error in server"});
    return res.json(result);

    })

})

// update operation

app.get('/read/:id', (req,res)=>{
    const sql = "SELECT * FROM has WHERE bloodbank_id = ?";
    const id=req.params.id;
    
    db.query(sql,[id], (err,result)=>{
    if(err) return res.json({Message: "error in server"});
    return res.json(result);
})
})

// edit for has table

app.put('/edit/:id', (req , res)=>{
    const sql='UPDATE has SET `bloodbank_id`=?,`bloodgroup_id`=?,`units`=?,`bloodgroup`=? WHERE bloodbank_id=?';
    const id=req.params.id;
    db.query(sql,[req.body.bloodbank_id, req.body.bloodgroup_id, req.body.units, req.body.bloodgroup, id], (err, result)=>{
        if(err) return res.json({Message: "error in server"});
    return res.json(result);

    })
})


// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // You can use other email services
//   auth: {
//     user: 'reshambhusal430@gmail.com', // Your email
//     pass: 'Resham@123',  // Your email password or app password
//   },
// });

// // Approve route
// app.post('/approve', async (req, res) => {
//   const { userEmail } = req.body; // Assuming you are sending the user's email in the request body

//   // Send an approval email
//   const mailOptions = {
//     from: 'reshambhusal430@gmail.com', // Sender address
//     to: userEmail, // Recipient email
//     subject: 'Request Approved',
//     text: 'Congratulations! Your request has been approved.',
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Approval email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send approval email');
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service
    auth: {
      user: 'reshambhusal430@gmail.com',
      pass: 'qncc tcbs rbvw xruq',
    },
  });
  
  // Approve route
  app.post('/approve/:id', (req, res) => {
    const patientId = req.params.id;
  
    // Update the patient's status to 'approved' in the database
    const updateQuery = 'UPDATE patient SET status = ? WHERE patient_id = ?';
    db.query(updateQuery, ['approved', patientId], (err, result) => {
      if (err) {
        console.error('Error updating patient status:', err);
        return res.status(500).send('Failed to approve request');
      }
  
      // Fetch patient's email from the database
      const getEmailQuery = 'SELECT patient_email FROM patient WHERE patient_id = ?';
      db.query(getEmailQuery, [patientId], (err, result) => {
        if (err) {
          console.error('Error fetching patient email:', err);
          return res.status(500).send('Failed to fetch patient email');
        }
  
        const patientEmail = result[0].patient_email;
  
        // Send approval email
        const mailOptions = {
          from: 'reshambhusal430@gmail.com',
          to: patientEmail,
          subject: 'Request Approved',
          text: 'Congratulations! Your request has been approved.',
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Failed to send approval email');
          }
  
          console.log('Email sent:', info.response);
          res.status(200).send('Request approved and email sent successfully');
        });
      });
    });
  });
  


app.listen(8080,()=>{
    console.log("listening");
})


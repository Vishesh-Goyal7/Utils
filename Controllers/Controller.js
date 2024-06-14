exports.fileUpload = (req, res) => {
    res.json({
        status: 200, message: `Upload Successful`, success:true
    })
}

exports.status = (req, res) => {
    res.json({
        status: 200, message: `Server looks good`, success:true
    })
}
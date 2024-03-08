






const loadLogin = async(req,res)=>{
    res.render('login')
}

const loadDashboard = async(req,res)=>{
    res.render('dashboard')
}

const loadAbout = async(req,res)=>{
    res.render('about')
}





module.exports={
    loadDashboard,
    loadLogin,
    loadAbout,
}
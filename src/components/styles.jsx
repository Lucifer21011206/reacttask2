
import backgroundImage from "../images/landing_page_background.svg";
const styles={
    BoxStyle:{
        display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width:"100%",
            position: "relative",
            margintop: "10%",
    },

    OTPBoxStyle:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        margintop: "10%",
    },

    IconButton:{
        mt: 12,
        ml: 70,
        mr: -4,
        position: "absolute",
        top: "5px",
        right: "calc(50% - 400px)",
        bgcolor: "white",
        borderRadius: "50%",
        boxShadow: 1,
    },
    
    IconButton2:{
        mt: 17,
        ml: 7,
        mr: -4,
        position: "absolute",
        top: "5px",
        right: "calc(50% - 400px)",
        bgcolor: "white",
        borderRadius: "50%",
        boxShadow: 1,
    },
    
IconButton4:{
    mt: 21,
    ml: 7,
    mr: -4,
    position: "absolute",
    top: "5px",
    right: "calc(50% - 400px)",
    bgcolor: "white",
    borderRadius: "50%",
    boxShadow: 1,
},
    
    IconButton3:{
        mt: 1,
        ml: 7,
        mr: -4,
        position: "absolute",
        top: "5px",
        right: "calc(50% - 400px)",
        bgcolor: "white",
        borderRadius: "50%",
        boxShadow: 1,
    },

    Box:{
        display: "flex",
              bgcolor: "white",
              borderRadius: 6,
              overflow: "hidden",
              maxWidth: 800,
              position: "relative",
    },
    

    Box2:{
        width: "50%",
        bgcolor: "#E6F7F1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    Box3:{
       width: "100%", height: "100%", objectFit: "cover"
    },

    OTPModalBox1:{
        display: "flex",
        bgcolor: "white",
        borderRadius: 2,
        overflow: "hidden",
        maxWidth: 800,
        position: "relative",
        borderRadius: 6,
     },
     OTPModalBox2:{
        width: "50%",
        bgcolor: "#E6F7F1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
     },
     BackgroundImageBox:{
        position: "absolute",
        right: 0,
        top: 0,
        width: "90%",
        height: "100%",
        zIndex: -1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
     },
     JobSearchFormBox:{
        display: "flex",
        mr:-31,
        ml:33,
        gap: 2,
        flexWrap: "wrap",
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
     },

     signuprightimage:{
        width: "101%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        flexShrink: 0,
        backgroundPosition:"center",
     },
     accountrightimage:{
       width: "401px", height: "500px", maxWidth: "401px", objectFit: "cover"
     },
     accountrightimage2:{
        display: "flex", justifyContent: "center", alignItems: "center" 
     },
     accountcreatecv:{
        bgcolor: "#D3D3D3", color: "black", mt: 2 ,height:45
     }
     ,
     accountuploadcv:{
        fontSize: "0.9rem", bgcolor: "#D3D3D3", color: "black", mt: 3, height:500 
     },
     accountcheckicon:{
        width: 70, height: 70 , mt: 1, mb:3.5
     },

     accountcreatemodelfirstgrid:{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
     },
     accountcreatemodelsecondtypo:{
        fontSize: "0.9rem", color: "gray", mb: 3, mt: 1
     },
     accountcreatemodelfirstbutton:{
        fontSize: "0.9rem", bgcolor: "#D3D3D3", color: "black", mt: 3, height: 45     },

    accountcreatemodelrightsideimage:{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f0f0f0",   
    },
    accountcreatemodelrightsideimagebox:{
        width: "101%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
        flexShrink: 0,  
    },
    accountcreatemodelicon:{
        position: "absolute",
            top: "-39px",
            right: "-28px",
            zIndex: 10,
            color: "text.primary",
            bgcolor: "background.paper",
            borderRadius: "50%",
            boxShadow: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "background.default",
            },
            "@media (max-width: 900px)": {
              top: "-39px",
              right: "-28px",
            },
            "@media (max-width: 600px)": {
              top: "-39px",
              right: "-28px",
            },
            "@media (max-width: 400px)": {
              top: "-39px",
              right: "-28px",
            },
            "@media (max-width: 300px)": {
              top: "-39px",
              right: "-28px",
            }, 
    },
    appbarcompomain:{
        backgroundColor: "transparent" 
    },
    appbarcompodisablegutter:{
        justifyContent: "space-between" 
    },
    appbarcompobox1:{
        display: "flex", alignItems: "center", gap: 1 
    },
    appbarcompobox2:{
        height: 43, width: 334, objectFit: "contain", mt:4 
    },
    appbarcompobox3:{
        display: "flex", gap: 2.7,fontSize:43, alignItems: "center" ,color:"#444"
    },
    appbarcompobox4:{
        color: "text.primary", height:33 , fontSize: "1.1rem", color: "gray",mt:5, mr:1.8
    },
    appbarbutton1:{
        color: "black", backgroundColor: "white", borderRadius: 2, mt:3.2 ,mr:1,height:53,width: 102
    },
    appbarbutton2:{
        color: "white",
                borderRadius: 2,
                mt:3.2,mr:-3.5,height:53,
                width: 102,
                elevation:15,
                bgcolor: "#00A76F",
                "&:hover": { bgcolor: "#ffffff",color:"black" },
    },
    jobsearchbox1:{
        borderradius: "40%",
        marginRight: "-37%",
        marginLeft: "31%",
        paddingRight: "1%",
        paddingLeft: "0%",
    },

     
}

export default styles

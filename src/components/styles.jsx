
import backgroundImage from "../images/landing_page_background.svg";
const styles={
    BoxStyle:{
        display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
     }
}

export default styles

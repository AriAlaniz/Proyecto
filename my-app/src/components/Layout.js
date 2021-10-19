import{ makeStyles } from "material-ui/core"

const Layout = ({ children }) => {
    return (
        <div className={classes.root }>
            {children}
        </div>
    )
}

export default Layout 


const useStyles = makeStyles((themes)  => ({
    root: {
        display: "flex",
        flexDirection: "colum",
        minHeight: "100vh",
    }
}))
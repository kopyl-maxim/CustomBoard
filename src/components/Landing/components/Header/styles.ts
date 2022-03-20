import makeStyles from '@mui/styles/makeStyles';

export default makeStyles({
    headerContainer: {
        position: "fixed",
        zIndex: 100,
        width: "100%",
        height: 80,
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.494) 9.4%, rgba(0, 0, 0, 0.475) 17.6%, rgba(0, 0, 0, 0.447) 24.8%, rgba(0, 0, 0, 0.41) 31.2%, rgba(0, 0, 0, 0.37) 37%, rgba(0, 0, 0, 0.325) 42.4%, rgba(0, 0, 0, 0.275) 47.5%, rgba(0, 0, 0, 0.224) 52.5%, rgba(0, 0, 0, 0.176) 57.6%, rgba(0, 0, 0, 0.13) 63%, rgba(0, 0, 0, 0.086) 68.8%, rgba(0, 0, 0, 0.05) 75.2%, rgba(0, 0, 0, 0.024) 82.4%, rgba(0, 0, 0, 0.008) 90.6%, rgba(0, 0, 0, 0) 100%);"
    },

    menuContainer: {
        margin: "0 30px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: 60,
        maxWidth: 1366,
        width: "100%",
    },

    headerItem: {
        "&.MuiButton-root": {
            margin: "0.313rem 1.25rem",
            padding: 0,
            fontSize: "0.625rem",
            color: "white",
            minWidth: 0,
        }
    },

    headerListItem: {
        "&.MuiTypography-root": {
            fontSize: "0.625rem",
            color: "white",
        }
    },

    logoImg: {
        width: 32,
        marginRight: 10,
        height: 32,
    },

    test: {
        width: 60,
        height: 60,
    }
});

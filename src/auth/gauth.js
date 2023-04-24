const gauth = () => {
    return (
        <>
        <meta name="referrer" content="no-referrer-when-downgrade"></meta>
        
        <div id="g_id_onload"
            data-client_id="303963369823-9qshsv36q2hc6iip35p2ja238sje4jh1.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-login_uri="http://127.0.0.1:3000"
            data-itp_support="true">
                hello WOrld
        </div>

        <div className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="filled_black"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left">
        </div>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
</>
    )
}
export default gauth;
import React from "react";
import { Card, Button, TextField } from "@mui/material";
import './Login.css'; // Import the CSS file

function LogIn() {
    return (
        <div className="login-container">
            <Card className="login-card">
                <h2>Login</h2>
                <form>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        placeholder="Enter your email"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        placeholder="Enter Password"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default LogIn;

import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="alert alert-danger" role="alert">
                                <h4 className="alert-heading">Something went wrong</h4>
                                <p>An unexpected error occurred while loading the page.</p>
                                <hr />
                                <p className="mb-0">Please refresh the page or go back to the home page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

import React, { Component } from "react";

export default ComposedComponent => {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener("online", this.handleConnectionChange);
      window.addEventListener("offline", this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.handleConnectionChange);
      window.removeEventListener("offline", this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      if (navigator.onLine) {
        const webPing = setInterval(() => {
          fetch("//google.com", {
            mode: "no-cors"
          })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing);
              });
            })
            .catch(() => this.setState({ isDisconnected: true }));
        }, 2000);
        return;
      }

      this.setState({ isDisconnected: true });
    };

    render() {
      const { isDisconnected } = this.state;

      return (
        <>
          {isDisconnected && (
            <div className="internet-error">
              <p className="title">No network</p>
              <p className="subtitle">Please connect to internet and refresh.</p>
            </div>
          )}
          {!isDisconnected && <ComposedComponent {...this.props} />}
        </>
      );
    }
  }

  return NetworkDetector;
};

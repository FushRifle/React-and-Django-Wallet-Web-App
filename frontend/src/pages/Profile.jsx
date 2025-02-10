import React from "react";
import "../css/profile.css";
import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const Profile = () => {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profile/")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="container text-center mt-4">
      <h2>Profile</h2>
      <Card className="p-4">
        <img
          src="https://th.bing.com/th/id/R.dbfd82aeb8c0c4479a2dc4b6de4434c0?rik=KT0kr7ThOWMM%2fg&pid=ImgRaw&r=0"
          alt="Profile"
          className="rounded-circle mx-auto d-block"
          width="120"
        />
        <div className="mt-3">
          <img
            src="https://th.bing.com/th/id/R.6f9d43bfa9d53235a7b6bc310fb5448b?rik=xUE6OknSO1WYUg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fQR-Code-PNG-Images.png&ehk=HPmT%2bF4%2ftU1Kn0R5oF8b%2ffA4ks46kTqApdr3kn7DzIg%3d&risl=&pid=ImgRaw&r=0"
            className="mx-auto d-block"
            alt="QR Code" style={{ width: "100px", height: "auto" }}
          />
        </div>
        <Button className="mt-3 qr-button" onClick={handleShow}>
          View QR Code
        </Button>
        <div>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Full Name: {profile.full_name}</p>
    </div>
      </Card>

      {/* QR Code Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>MY QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src="https://th.bing.com/th/id/R.6f9d43bfa9d53235a7b6bc310fb5448b?rik=xUE6OknSO1WYUg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fQR-Code-PNG-Images.png&ehk=HPmT%2bF4%2ftU1Kn0R5oF8b%2ffA4ks46kTqApdr3kn7DzIg%3d&risl=&pid=ImgRaw&r=0"
            className="qr-code-large"
            alt="Large QR Code"
          />
        </Modal.Body>
      </Modal>
      <br />
      <br />
    </div>
  );
};

export default Profile;

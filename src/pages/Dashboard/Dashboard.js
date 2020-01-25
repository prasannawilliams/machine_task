import React, { useEffect, useState } from 'react';
import { usersList } from 'store/actions/machineAction';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from 'react-router';

function Dashboard(props) {
  const userDetail = {};
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');


  const machineGlobalState = useSelector(s => s.machineReducerState);
  const { usersListArr } = machineGlobalState;

  const dispatch = useDispatch();
  useEffect(() => {
    let getUserStatus = localStorage.getItem('userData');
    if (!getUserStatus) {
      props.history.push('/login')
    }
    const { match: { params: { restId } = {} } = {} } = props;
    dispatch(usersList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (userData) => {
    setName(userData.name);
    setAge(userData.age);
    setSex(userData.sex);
    setGender(userData.gender);
    setPhone(userData.phoneNo);
    setEmail(userData.email);
    setShow(true);
  }


  return (
    <Container>
      <div className="dashboard-section">
        <Row>
          {
            usersListArr.map((userItem) => {
              return (
                <Col lg={6} onClick={() => handleShow(userItem)}>
                  <div className="user-list">
                    <p><b>Name:</b> {userItem.name}</p>
                    <p><b>Email:</b> {userItem.email}</p>
                    {/* <p><b>Phone: </b>{userItem.phone}</p> */}
                    {/* <p><b>Age:</b> {userItem.age}</p> */}
                    {/* <p><b>Gender:</b> {userItem.gender}</p> */}
                  </div>
                </Col>
              )
            })
          }


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>User details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="user-detail">
                <p><b>Name:</b> {name}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Phone: </b>{phone}</p>
                <p><b>Age:</b> {age}</p>
                <p><b>Gender:</b> {gender}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </Row>
      </div>
    </Container>
  )

}

// }
export default withRouter(Dashboard);

import React from 'react'
import Modal from 'react-modal'

import Button from 'components/common/Button'
import ButtonGroup from 'components/common/ButtonGroup'

import styles from './modal.module.scss'

const Confirm = ({confirmMessage, ...props}) => {
  return (
    <Modal
      {...props}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel='Confirm'>

      {confirmMessage
      ? <h3>{confirmMessage}</h3>
      : <h3>Are you sure?</h3>}
      <ButtonGroup>
        <Button onClick={props.onRequestClose}>abort</Button>
        <Button onClick={props.onConfirm} color='danger'>Make it so!</Button>
      </ButtonGroup>
    </Modal>
  )
}

export default Confirm

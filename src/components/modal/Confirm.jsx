import React from 'react'
import Modal from 'react-modal'

import { Button, ButtonGroup } from 'components/common'

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
        <Button value='Abort' onClick={props.onRequestClose} />
        <Button value='Make it so!' onClick={props.onConfirm} color='danger'>Make it so!</Button>
      </ButtonGroup>
    </Modal>
  )
}

export default Confirm

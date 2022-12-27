import React from 'react';
import {
    CCol,
    CRow,
} from '@coreui/react'

const CustomWalletListCard = (props) => {
    return (
        <div style={{ backgroundColor: "#eff7ff", paddingTop: 4, paddingBottom: 4, marginTop: 4, borderRadius: 4 }}>
            <CRow>
                <CCol style={{ marginLeft: 8 }}>
                    <small>{props.title}</small>
                </CCol>
                <CCol style={{ marginRight: 8, textAlign: 'right' }}>
                    <small>{props.description}</small>
                </CCol>
            </CRow>
            <CRow>
                <CCol style={{ marginLeft: 8 }}>
                    <small>{props.earningTitle}</small>
                </CCol>
                <CCol style={{ marginRight: 8, textAlign: 'right' }}>
                    <small>{props.earning}</small>
                </CCol>
            </CRow>
        </div>
    )
}
export default CustomWalletListCard;
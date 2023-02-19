import React from "react";
import { render } from "react-dom";
import { QRCode } from "react-qr-svg";
import { QR_CONTRACT_ADDRESS } from "../../constants/common";

const styles = {
    root: {
        color: "#2C1752",
        fontFamily: "sans-serif",
        textAlign: "center"
    },
    title: {
        color: "#7B3FE4"
    }
};

// update with your contract address
const deployedContractAddress = QR_CONTRACT_ADDRESS;

const qrProofRequestJson = {
    id: "7f38a193-0918-4a48-9fac-36adfdb8b542",
    typ: "application/iden3comm-plain-json",
    type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
    thid: "7f38a193-0918-4a48-9fac-36adfdb8b542",
    body: {
        reason: "airdrop participation",
        transaction_data: {
            contract_address: deployedContractAddress,
            method_id: "b68967e2",
            chain_id: 80001,
            network: "polygon-mumbai"
        },
        scope: [
            {
                id: 1,
                circuitId: "credentialAtomicQuerySigV2OnChain",
                query: {
                    allowedIssuers: ["*"],
                    context:
                        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
                    credentialSubject: {
                        birthday: {
                            $lt: 20020101
                        }
                    },
                    type: "KYCAgeCredential"
                }
            }
        ]
    }
};

export default class QrCode extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <div style={styles.root}>
                <div>
                    <QRCode
                        level="Q"
                        style={{ width: 256 }}
                        value={JSON.stringify(qrProofRequestJson)}
                    />
                </div>
                <br />
            </div>
        );
    }
}
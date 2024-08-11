
import { FC } from "react";
import { Unlock, PencilSquare, Trash } from 'react-bootstrap-icons';
import { Contract, BrowserProvider } from "ethers";
import PasswordType from "@/types/Items/PasswordType";
import { hasValidSignature } from "@/types/Utils";
import { useWeb3ModalProvider, useWeb3ModalAccount  } from '@web3modal/ethers/react';

type Props = {
    item: PasswordType,
    setFormEditView: Function,
    setItem: Function,
    setIsModalVisible: Function,
    setIsDeleteModalVisible: Function,
    vault: Contract | null
}
const Password: FC<Props> = ({item, setFormEditView, setItem, setIsModalVisible, setIsDeleteModalVisible, vault}) => {

    const { walletProvider } = useWeb3ModalProvider();
    const { address, chainId, isConnected } = useWeb3ModalAccount();

    const isSigned = async () => {

        try{

            if (!walletProvider) {
                return false;
            }

            const provider = new BrowserProvider(walletProvider);
            const signer = await provider.getSigner();

            const signatureIsValid = await hasValidSignature(address,signer);

            return signatureIsValid;

        }catch (e) {
            console.log(e);
            return false;
        }

    }
    const handleEdit = async ()=>{

        const signed = await isSigned();

        if(signed){
            setItem(item);
            setFormEditView();
        }

    }

    const handleOpen = async ()=>{

        const signed = await isSigned();

        if( signed ){
            setItem(item);
            setIsModalVisible(true);
        }

    }

    const handleDelete = async ()=>{

        const signed = await isSigned();

        if( signed ){
            setItem(item);
            setIsDeleteModalVisible(true);
        }

    }

    return (
        <>
            <div className={"item-card loyality-card"}>

                <div className="item-card-body">
                    <h5 className="item-card-title">
                        {item.name}
                    </h5>
                    <span className="item-card-text">
                        {item.url}
                        <br/>
                    </span>
                    <a target={"_blank"} className={"item-card-text link-purple text-white text-decoration-none"}
                       href={`https://polygonscan.com/address/${item.address}`}>
                        <small>{item.address}</small>
                    </a>
                </div>
                <div className={"item-card-footer"}>
                    <button onClick={handleOpen} className="btn-hover btn-circle"><Unlock/></button>
                    <button onClick={handleEdit} className="btn-hover btn-circle"><PencilSquare/></button>
                    <button onClick={handleDelete} className="btn-hover btn-circle"><Trash/></button>
                </div>

            </div>
        </>
    )
}

export default Password;
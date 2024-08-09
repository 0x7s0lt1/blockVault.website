
import React, {FC, useEffect, useState} from "react";
import { BrowserProvider, Contract } from "ethers";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { ABI as LoyABI } from "@/common/contract/Items/LoyalityCardContract";
import { ItemType } from "@/types/ItemType";
import LoyalityCard from "@/modules/Items/LoyalityCard";
import LoyalityCardType from "@/types/Items/LoyalityCardType";
import Modal from "@/modules/Modal/Modal";
import Header from "@/modules/Modal/LoyalityCard/View/Header";
import Body from "@/modules/Modal/LoyalityCard/View/Body";
import Footer from "@/modules/Modal/LoyalityCard/View/Footer";

import DeleteHeader from "@/modules/Modal/LoyalityCard/Delete/Header";
import DeleteBody from "@/modules/Modal/LoyalityCard/Delete/Body";
import DeleteFooter from "@/modules/Modal/LoyalityCard/Delete/Footer";
import { POLYGON_CHAIN_ID_DEC } from "@/types/Utils";

type Props = {
    items: LoyalityCardType[],
    setItems: Function,
    isSearch: boolean,
    searchResults: Array<LoyalityCard>,
    setFormEditView: Function,
    item: LoyalityCardType|null,
    setItem: Function,
    isModalVisible: boolean,
    setIsModalVisible: Function,
    isDeleteModalVisible: boolean,
    setIsDeleteModalVisible: Function,
    vault: Contract | null
}
const LoyalityList : FC<Props> = ({
                                      items,
                                      setItems,
                                      isSearch,
                                      searchResults,
                                      setFormEditView,
                                      item,
                                      setItem,
                                      isModalVisible,
                                      setIsModalVisible,
                                      isDeleteModalVisible,
                                      setIsDeleteModalVisible,
                                      vault
}) => {

    const { address, chainId, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const [listIsLoading, setListIsLoading] = useState(true);
    const [itemsMap, setItemsMap] = useState<any>();

    const onModalClose = () => {
        setItem(null);
    }

    const fetchItems = async () => {

        setListIsLoading(true);
        setItems([]);
        setItemsMap(<span className={"empty-label"}>No Loyality Cards Yet</span>);

        try {

            if (address && isConnected){

                if(chainId == POLYGON_CHAIN_ID_DEC){

                    const addresses = await vault['getItem']( ItemType.LOYALITY_CARD, {from: address});

                    if(addresses.length > 0){

                        const provider = new BrowserProvider(walletProvider);
                        const signer = await provider.getSigner();

                        for (const _address of addresses) {

                            const contract = new Contract(_address, LoyABI, signer);
                            const card = await contract['expose']({from: address});

                            items.push({
                                name: card[0],
                                number: card[1],
                                address: _address
                            } as LoyalityCardType );

                            setItems(items);

                        }

                        setItemsMap(
                            items.map( (item: LoyalityCardType) => <LoyalityCard item={item} setFormEditView={setFormEditView} setItem={setItem} vault={vault} key={item.address}  setIsModalVisible={setIsModalVisible} setIsDeleteModalVisible={setIsDeleteModalVisible}/> )
                        );

                    }

                    setListIsLoading(false);

                }

            }

        }catch (e) {
            console.log(e);
            alert(e.message);
            setListIsLoading(false);
        }

    }


    useEffect(() => {

        (async()=> {
            await fetchItems();
        })();

    }, []);
    
    return (
        <>
            <div className={"list-wrapper"}>

                {
                    listIsLoading ?
                        <>
                            <div className={"loading-wrapper"}>
                                <span className="spinner-border text-light" role="status"></span>
                            </div>
                        </> :
                        <>
                            {
                                isSearch ? searchResults : itemsMap
                            }
                        </>
                }

            </div>

            <Modal
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                header={<Header item={item} />}
                body={<Body item={item} />}
                footer={<Footer item={item} />}
                onClose={onModalClose}
            />

            <Modal
                visible={isDeleteModalVisible}
                setVisible={setIsDeleteModalVisible}
                header={<DeleteHeader item={item} />}
                body={<DeleteBody item={item} />}
                footer={<DeleteFooter fetchItems={fetchItems} setIsDeleteModalVisible={setIsDeleteModalVisible} setItem={setItem} item={item} vault={vault} />}
                onClose={onModalClose}
            />

        </>
    )
}

export default LoyalityList;
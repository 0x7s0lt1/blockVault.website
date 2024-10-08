
import { FC } from "react";
import { Contract } from "ethers";
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { Link } from "react-router-dom";
import { CHAINS } from "@/types/Utils";

type Props = {
    ticker: string|undefined
    balance: number
    vault: Contract | null
}
const VaultInfo : FC<Props> = ({ ticker, balance, vault }) => {

    const { address, chainId, isConnected } = useWeb3ModalAccount();

    return (
        <>
            <section className={"vlt-info border-white slot-hover"}>
                <span className="vlt-text">
                    <h1 className="value">
                        {
                            balance !== undefined ? `${balance} ${ticker}` :  <span className="spinner-border text-light" role="status"></span>
                        }
                    </h1>
                </span>
                <span className="vlt-text">
                    <a target={"_blank"} className="value link-purple" href={`${CHAINS.get(chainId)?.explorerUrl ?? ""}/address/${vault?.target}`}>
                        {`${vault?.target}`}
                    </a>
                </span>

                <section className={"vlt-payable-wrapper"}>

                    <Link to={'/deposit'} className={"payable-btn btn-hover"}>Deposit</Link>
                    { balance > 0 ? <Link to={'/withdraw'} className={"payable-btn btn-hover"}>Withdraw</Link> : <></> }
                </section>

            </section>
        </>
    )
}

export default VaultInfo;
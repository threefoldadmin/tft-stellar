# TFTv1(TFTA)to TFTv2(TFT) conversion

## Concept

The total amount of TFTv1(TFTA)+TFTv2(TFT) can not change. This means that newly issued TFTv2 requires the same amount of TFTv1 to be destroyed.

People have to send this amount of TFTA to the TFTA issuer account `GBUT4GP5GJ6B3XW5PXENHQA7TXJI5GOPW3NF4W3ZIW6OOO4ISY6WNLN2`
This acually destroys the TFTA (using multisignature).

Next, a conversion bot hosted in Dubai collects the destroyed amounts, the sending addresses, the memo text messages  and the transaction id's.

Using this information,  if the memo text is correct (accepting the terms & conditions), new TFT are issued (using multisignature) to the sending addresses for these amounts with the transaction id the memo_hash field as a proof of the relationship between the destruction and the issuance.

If the memo text is not correct, The burned TFTA's are issued again to the sending addresses for these amounts with the transaction id the memo_hash field as a proof of the relationship between the destruction and the issuance.

A consensus mechanism is used of 7 blockchain nodes run by community members who understand how to run these consensus agreement & validation scripts.
The blockchain nodes run validator scripts (jsng) and if the validation is correct then they will sign of using multi signature on Stellar. 
A consensus of 5/7 need to be achieved before the Stellar blockchain can execute the transaction.

what is the role of each component

- conversion bot: prepares the transactions
- stellar: hosts the transactions
- 5+ blockchain nodes, validator script, see there are new trasanctions
- 5+ blockchain nodes, validator script, will run the verification scripts/actions
- 5+ blockchain nodes, validator script, when succesful verification, sign the transaction(s)
- stellar: once multisignature quorum achieved, Stellar blockchain will allow the conversion transactions to happen

validator scripts are run at least 5 times (this to allow 2 blockchain nodes to be offline).

remark: 

- conversion bot is centrally run somewhere in Dubai, this bot only prepares and has no decision power.
- all scripts will be on this repo to allow community to verify
- everyone using the conversion bot will have to accept to be defined Terms & Conditions (in line with rules and regulations of amongst others the exchanges TF works with)

## side effects

Since 0.1 TFTA is added as a transaction fee when using the 3bot wallet, 0.1 TFT less will be issued then. 

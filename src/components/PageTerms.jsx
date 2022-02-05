import React from 'react';
import config from '../data/app.json';
import './PageTerms.css';

function PageTerms() {
  return (
    <div className="PageTerms">
      <div className="PageTerms-inner">
        <div className="PageTerms-section">
          <h1 className="PageTerms-headline">TERMS &amp; CONDITIONS</h1>
          <p className="PageTerms-blurb">
            {config.TOKEN_NAME}
            {' '}
            is a collection of digital artworks (NFTs) running on the Ethereum network.
            This website is only an interface allowing participants to exchange
            digital collectibles.
            Users are entirely responsible for the safety and management of their own private
            Ethereum wallets and validating all transactions and contracts generated
            by this website
            before approval. Furthermore, as the
            {' '}
            {config.TOKEN_NAME}
            {' '}
            smart contract runs on the Ethereum network, there is no ability to undo, reverse,
            or restore any transactions.
          </p>
          <p className="PageTerms-blurb">
            This website and its connected services are provided “as is”
            and “as available”
            without warranty of any kind. By using this website you are accepting
            sole responsibility
            for any and all transactions involving
            {' '}
            {config.TOKEN_NAME}
            {' '}
            digital collectibles.
          </p>
        </div>
        <div className="PageTerms-section">
          <h2 className="PageTerms-headline">OWNERSHIP</h2>
          <p className="PageTerms-blurb">
            i. You Own the NFT. Each
            {' '}
            {config.TOKEN_NAME}
            {' '}
            is an NFT on the Ethereum blockchain. When you purchase an NFT,
            you own the underlying
            {' '}
            {config.TOKEN_NAME}
            , the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract
            and the Ethereum Network: at no point may we seize, freeze, or otherwise modify
            the ownership of any
            {' '}
            {config.TOKEN_NAME}
            .
          </p>
          <p className="PageTerms-blurb">
            ii. Personal Use. Subject to your continued compliance with these Terms, we grant
            you a worldwide, royalty-free license to use, copy,
            and display the purchased Art, along
            with any extensions that you choose to create or use, solely forthe following purposes:
            (i) for your own personal, non-commercial use; (ii) as part of
            a marketplace that permits
            the purchase and sale of your
            {' '}
            {config.TOKEN_NAME}
            {' '}
            / NFT, provided that the marketplace cryptographically verifies each
            {' '}
            {config.TOKEN_NAME}
            {' '}
            owner’s rights to display the Art for their
            {' '}
            {config.TOKEN_NAME}
            {' '}
            to ensure that only the actual owner can display the Art;
            or (iii) as part of a third party
            website or application that permits the inclusion, involvement,
            or participation of your
            {' '}
            {config.TOKEN_NAME}
            , provided that the website/application cryptographically verifies each
            {' '}
            {config.TOKEN_NAME}
            {' '}
            owner’s rights to display the Art for their
            {' '}
            {config.TOKEN_NAME}
            {' '}
            to ensure that only the actual owner can display the Art,
            and provided that the Art is no
            longer visible once the owner ofthe
            {' '}
            {config.TOKEN_NAME}
            {' '}
            leaves the website/application.
          </p>
          <p className="PageTerms-blurb">
            iii. Commercial Use. Subject to your continued compliance with these
            Terms, we grant you an
            unlimited, worldwide license to use, copy, and display the purchased Art for the purpose
            of creating derivative works based upon the Art (“Commercial Use”). Examples of such
            Commercial Use would e.g. be the use of the Art to produce and sell merchandise products
            (T-Shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this
            Section will be deemed to restrict you from (i) owning or operating a marketplace that
            permits the use and sale of FantasticFluffz generally, provided that the marketplace
            cryptographically verifies each
            {' '}
            {config.TOKEN_NAME}
            {' '}
            owner’s rights to display the Art for their
            {' '}
            {config.TOKEN_NAME}
            {' '}
            to ensure that only the actual owner can display the Art; (ii) owning or operating a
            third party website or application that permits the inclusion, involvement, or
            participation of FantasticFluffz generally, provided that the third party website or
            application cryptographically verifies each
            {' '}
            {config.TOKEN_NAME}
            {' '}
            owner’s rights to display the Art for their
            {' '}
            {config.TOKEN_NAME}
            {' '}
            to ensure that only the actual owner can display the Art, and provided that the Art is
            no longer visible once the owner of the Purchased
            {' '}
            {config.TOKEN_NAME}
            {' '}
            leaves the website/application; or (iii) earning revenue from any of the foregoing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageTerms;

import React, { useState } from 'react';
import { sponsorsData } from '../data/sponsors';
import './Sponsors.css';

// ティア順の定義
const tierOrder = ['platinum', 'gold', 'silver', 'bronze'];

const Sponsors = () => {
    // ティアごとにグループ化
    const groupedSponsors = tierOrder
        .map((tier) => ({
            tier,
            sponsors: sponsorsData.filter((s) => s.tier === tier),
        }))
        .filter((group) => group.sponsors.length > 0);

    return (
        <section id="sponsors" className="sponsors-section">
            <div className="sponsors-container">
                <h2 className="sponsors-heading">Sponsors</h2>
                <p className="sponsors-subtitle">ご協賛いただいている企業・団体の皆さま</p>

                {groupedSponsors.map((group) => (
                    <div key={group.tier} className="sponsors-tier" data-tier={group.tier}>
                        {/* ティアが複数ある場合のみラベルを表示 */}
                        {groupedSponsors.length > 1 && (
                            <div className="sponsors-tier-label">{group.tier}</div>
                        )}
                        <div className="sponsors-grid">
                            {group.sponsors.map((sponsor) => (
                                <SponsorLogo key={sponsor.id} sponsor={sponsor} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const SponsorLogo = ({ sponsor }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <a
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo-link"
            data-tier={sponsor.tier}
            title={sponsor.name}
        >
            {imgError ? (
                <div className="sponsor-logo-placeholder">{sponsor.name}</div>
            ) : (
                <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    className="sponsor-logo"
                    onError={() => setImgError(true)}
                />
            )}
        </a>
    );
};

export default Sponsors;

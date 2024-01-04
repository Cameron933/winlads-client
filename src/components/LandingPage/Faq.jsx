import React from 'react'
import FaqItem from './FaqItem'
import bgFullLogo from '../../assets/images/logo-full.png';
const styles = {
    backgroundImage: 'url(src/assets/images/logo-full.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const Faq = () => {
    return (
        <div className='bg-chose-plan py-1 px-1 md:px-0' id='faq'>
            <h2 className='uppercase text-2xl font-bold text-center my-10'>Frequently Asked Questions</h2>
            <div className='flex items-stretch justify-center md:flex-row flex-col md:px-10'>
                <div>
                    <FaqItem
                        title={'How does the referral program work?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'What are the benefits of participating in the referral program?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'How can I refer someone to join?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'Are there any limitations on the number of referrals I can make?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'How are the referral commissions calculated?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'Can I track my referrals and earned commissions?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'When do I receive my referral commissions?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                </div>
                <div style={styles}>
                    <FaqItem
                        title={'Are there any terms or conditions for participating in the referral program?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'Can I refer myself or create multiple accounts to earn commissions?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={'Is there customer support available for any referral-related queries?'}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                    <FaqItem
                        title={`Do I earn commissions from the referrals made by the people I've referred?`}
                        desc={'The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Faq
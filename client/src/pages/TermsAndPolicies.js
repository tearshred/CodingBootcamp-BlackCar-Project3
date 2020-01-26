import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StopIcon from '@material-ui/icons/Stop';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        padding: '60px 30px 20px 30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    },
    title: {
        paddingBottom: '35px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    subheader: {
        paddingTop: '20px',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        borderTop: `2px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(4),
        padding: theme.spacing(6, 0),
    },
}));

function Terms() {
    const classes = useStyles();
    const currentYear = new Date().getFullYear();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Typography className={classes.title} component="h3" variant="h3" align="center" color="textPrimary">
                    Terms and Policies
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary">
                    Introduction
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginBottom: '4px' }}>All transportation services are subject to the following Terms of Service (“Terms”). By agreeing to these Terms, you acknowledge and agree to be bound by the conditions of use listed below, and any future revisions and additions.</p>
                    <p style={{ marginTop: '4px' }}>By agreeing to these terms of service, you also confirm that you understand how our service works.</p>
                </Typography>
                <Typography variant="h5" align="left">
                    About Reservations
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p>Reservations to the airport are valid only for the time and date specified. Reservations from the airport are valid only for the date specified. We are not responsible for customer error resulting in unused reservations or missed flights. When changing the pick up or drop off location of a reservation, rates are subject to change and additional charges may apply.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}  Runs to the Airport</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>This service is a private, direct transportation service utilizing luxury sedans and SUVs for non-stop transportation to the airport.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}  "Will Call" from the Airport</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Airport “Will Call” reservations are a curbside pickup. When you arrive to your destination, your private chauffeur will text you. Once you're ready for curbside pickup your chauffeur will meet you in the arrivals curbside pickup area. Be sure to provide your mobile phone number that you will be traveling with when you make your reservation.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}  "Meet and Greet" from the Airport</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Airport “Meet and Greet” reservations will require an additional fee. The Driver will meet the customer in baggage claim with a personalized sign/placard. The Driver will assist the customer with luggage and proceed to the parking area to board the vehicle.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Short Notice Reservations</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>Short notice reservations are reservations made less than two hours prior to requested pickup times. We are unable to guarantee service availability or timely service for short notice reservations. Availability will depend on a variety of conditions, including pickup location, drop-off location, and current vehicle availability.</p>
                    <p style={{ marginTop: '4px' }}>There are no refunds available for reservations made with less than one hour advance notice.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Reservation Abandonment</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Reservation abandonment occurs when the Driver cannot find the customer at the designated pick-up location and cannot reach customer for further instruction using the contact number provided.</p>
                </Typography>
                <Typography variant="h5" align="left">
                    Rates
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p>Tolls, taxes and other fees may be not included in the calculated cost of the ride and customer may be responsible for additional charges.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}  Exclusive, Non-Stop Airport Transfers</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>These reservations include sedan and SUV service. A flat rate is quoted at the time of booking and is guaranteed so long as the reservation is not changed. Fees for additional stop requests are discussed below.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}  Charter Reservations</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Charters options include point to point or hourly transportation. Point to point reservations require a minimum charge plus distance-traveled charge and advance reservations. Vehicles are available based on demand and cannot be guaranteed on short notice. Hourly charters require a two-hour minimum reservation and at least one hour advanced notice. Hourly charter reservations should be made in advance to ensure availability.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}  Extra Stop Fee</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Customers may add an additional stop to an airport transfer or point to point reservation for an additional fee. Extra stop fees vary and will be charged at Driver’s discretion. Extra Stop Fees do not apply to charter reservations. If an extra stop incurs additional miles, additional fees may apply.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}Wait Fees</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Wait Fees are incurred when the customer is unable to go at the requested time and the vehicle’s operator must wait for more than a few minutes to provide service. Fees are intended for waits that are usually excessive and wait fees are charged at the vehicle operator’s discretion.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Payments</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Customers must pay at time of booking to secure advance reservations. Any charges processed at the time of booking are refundable following the terms outlined in the Cancellation Policy below.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Receipts</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Web-based reservations have the option to receive an email confirmation with complete reservation and payment details. For reservations made by phone or email receipts can be provided if needed.</p>
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary">
                    Safety
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Seatbelts</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Seatbelts are provided for customer safety. We require customers to wear safety belts while inside the vehicle, but it is the customer’s responsibility to ensure the seatbelt is securely fastened, as required by law. Operators reserve the right to refuse service to parties out of compliance with applicable laws. </p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Vehicle Capacities</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Sedans typically seat 3 passengers with limited luggage space. SUVs seat 6 passengers with limited luggage space. Oversized or excess luggage may require a second vehicle at additional cost. Seat capacity is limited to seats with working safety belts. State laws prohibit loading vehicles beyond seating capacity. Any attempt to do so may require additional vehicle reservations.</p>
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary">
                    Smoking
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p>Smoking is not permitted in any of our vehicles.</p>
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary">
                    Special Handling
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Traveling with Children</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>We welcome the opportunity to serve our younger travelers when accompanied by a responsible adult. If making an online reservation, please indicate the number of children traveling so we can reserve a seat. State laws do not allow children to ride in the lap of an adult. If your child is under the minimum age/weight standards, you must supply an approved car seat for each child to whom the applicable law applies. It is recommended that traveling parents and legal guardians become knowledgeable about the applicable laws in the states in which they will be traveling. Operators reserve the right to refuse service to parties out of compliance with state law. </p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Traveling Minors</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Customers under the age of 16 must be accompanied by a parent or guardian for the entire duration of the ride. Operators may refuse service if a child is not old enough to ride alone and is without an adult or guardian.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Pets</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>Pets are permitted in our vehicles with advance reservations. All pets, excluding service animals, must be kenneled. Pets less than 25 pounds may be held in a lap carrier. Pets larger than 25 pounds must reserve SUV. All pets must be properly secured within the carrier at all times.</p>
                    <p style={{ marginTop: "4px" }}>Service animals are permitted on vehicles. Please be mindful of the vehicle size while booking rides with a service animal.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>User Error</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>Customer is responsible for providing accurate information at time of booking. When he/she provides information for travel, the customer agrees that the information will be accurate. We are not responsible for mistakes made by customers while using the service or our official websites</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Travel Times and Delays</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>We are not responsible for significant delays in anticipated arrival due to traffic, weather, or road conditions, or any other unforeseen circumstances. Under such conditions, We reserve the right to cancel and refund reservations in advance of the scheduled pickup.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Customer Service Concerns</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px" }}>{'Customers are encouraged to '}<Link href="/contact" title="Contact">notify us</Link>{' of their experience, good or bad.'}</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}Limitations on Compensation Following Service Failure</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px', marginBottom: '4px' }}>Where it is determined to be company fault, customers may receive compensation in the form of a partial or complete refund, reservation credits, or through other means.</p>
                    <p style={{ marginTop: "4px" }}>In most cases where alternative transportation is taken and paid for by the customer, reimbursement will not include full refund of the original reservation but will reimburse the difference paid for the alternate mode of transportation over the original cost of the reservation with service.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}Limitations on Compensation Following Missed Flights</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px', marginBottom: '4px' }}>When it is determined to be company fault, We may provide compensation not to exceed $200.00 per person for domestic and international flights. We may reimburse for overnight lodging in the event customer cannot book a flight out on the same day of travel. Reimbursement is based on the average standard room rate as dictated by management in that market. Meals and other expenses are not covered as part of reimbursement for delays or missed flights.</p>
                    <p style={{ marginTop: "4px" }}>We do not assume any responsibility for lost income or potential income, and other losses resulting from missed professional or personal functions. When traveling to an important event, it is recommended to allow extra travel time by booking earlier than the recommended time to avoid delays.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}Limitations on Customer Claim Time</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>The Customer hereby acknowledges and agrees that, unless a longer period is mandated and made unwaiveble by law, any claim relating to the services provided to Customer hereunder, including, without limitation, claims relating to damaged luggage, missed flight or other out of pocket expenses due to any alleged service failure, must be brought within 30 days after the occurrence of the act or omission that is the subject of the claim.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />}Refunds</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>For Credit Card Refunds: Once approved, a refund request is submitted within 24 hours, excluding weekends and federal holidays. The refund is then completed by customer’s financial institution. Customer should refer to their financial institution to check on status of refund.</p>
                </Typography>

                {/* Policies */}
                <Typography variant="h4" align="left" color="textPrimary">
                    Policies
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Cancellation Policy</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: '4px' }}>Customers can cancel a reservation at any time up to one (2) hours before the scheduled pickup for a full fare refund using the website. Cancellations can also be made by calling 1 (619) 254-9269.</p>
                    <p style={{ marginTop: "4px" }}>We will not provide a refund if the reservation is cancelled or changed less than 2 hours prior to pick-up time, or in the event of reservation abandonment. This includes bookings made within 2 hours of pickup time.</p>
                    <p style={{ marginBottom: '4px' }}>Flight Cancellations and Delays Due to Airlines:</p>
                    <p style={{ marginTop: "4px" }}>Failure to contact us with flight cancellation or delay information in a timely manner may be considered reservation abandonment and may result in forfeiture of fare. Reservations impacted by airline delays and cancellations may qualify for refund when a replacement reservation is made.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Oversized and Extra Luggage Policy</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: '4px' }}>How many pieces of luggage can I have?</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>Our luggage policy closely follows that of airlines. For each passenger, two checked bags (e.g. suitcase, duffel bag) and two carry-on items (e.g. diaper bag, laptop case, backpack, or purse) all ride free.</p>
                    <p style={{ marginTop: "4px" }}>{'Extra fees may apply in the following instances. '}<Link href="/contact" title="Contact">Contact us</Link>{' for needs outside of those listed.'}</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Excess/Oversized Baggage – $10 fee per item</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />} Checked bag exceeds 50 pounds (or approximately 23 kilograms).</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: '4px' }}>{<StopIcon style={{ fontSize: 'small' }} />} Total dimensions for your checked bag exceeds 80 inches when adding length, width, and height.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Golf Clubs – Varies</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Counts toward your total number of checked items. (e.g. If you have one checked bag and one set of clubs, the clubs are free.)</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Child Seat Policy</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: '4px' }}>What is your Child Seat Policy?</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>We support the strongest safety standard by recommending that small children five years and under be secured in a child restraint seat for transportation. If federal, state, or local law requires your child be secured in a child safety seat, please bring one as it is the parent’s or caregiver’s responsibility. We do not provide child restraint seats and likely will not be able to provide service without one. Children under the age of 16 years old must be accompanied by an adult.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Service Animal/Pet Policy</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: '4px' }}>Am I allowed to bring a pet?</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>Our policy regarding the transport of animals is designed to ensure adequate space for the kennel(s), and your baggage. All animals – excluding service animals – must be kenneled to board the vehicle. Kennel guidelines are as follows:</p>
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>{<StopIcon style={{ fontSize: 'small' }} />}  Less than 25 pounds: Lap carrier permitted.</p>
                    <p style={{ marginTop: "4px" }}>{<StopIcon style={{ fontSize: 'small' }} />}  More than 25 pounds: Must reserve SUV.</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p">
                    <p style={{ marginBottom: '4px' }}>Tipping Policy</p>
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p">
                    <p style={{ marginTop: '4px' }}>Passengers have the option to tip their drivers in-person or online. When reviewing the total charge of your ride, there will be a pre-selected tip percentage added to the subtotal. This pre-selected tip percentage can be adjusted prior to purchase or select the “Tip in Vehicle” option which designates an in-person tip to our driver, via credit card or cash, after a ride completion.</p>
                </Typography>
            </div>

            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" gutterBottom>
                        San Diego Airport Transportation
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Phone: (619) 254-9269  |  Location: La Jolla, CA 92037
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        © {currentYear} Naissus LLC
                    </Typography>
                </Container>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Developed by Bojan & Veselin.'}
                    </Typography>
                </Box>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

export default Terms;
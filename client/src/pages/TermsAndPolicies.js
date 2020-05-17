import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StopIcon from '@material-ui/icons/Stop';
import Link from '@material-ui/core/Link';
import Footer from '../components/Footer';

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
}));

function Terms() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Typography className={classes.title} component="h3" variant="h3" align="center" color="textPrimary">
                    Terms and Policies
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary" paragraph>
                    Introduction
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    All transportation services are subject to the following Terms of Service (“Terms”).
                    By agreeing to these Terms, you acknowledge and agree to be bound by the conditions of use listed below, and any future revisions and additions.
                </Typography >
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    By agreeing to these terms of service, you also confirm that you understand how our service works.
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    About Reservations
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Reservations to the airport are valid only for the time and date specified.
                    Reservations from the airport are valid only for the date specified. We are not responsible for customer error resulting in unused reservations or missed flights.
                    When changing the pick up or drop off location of a reservation, rates are subject to change and additional charges may apply.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Runs to the Airport
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    This service is a private, direct transportation service utilizing luxury sedans and SUVs for non-stop transportation to the airport.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  "Will Call" from the Airport
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Airport “Will Call” reservations are a curbside pickup. When you arrive to your destination, your private chauffeur will text you.
                    Once you're ready for curbside pickup your chauffeur will meet you in the arrivals curbside pickup area. Be sure to provide your mobile phone number that you will be traveling with when you make your reservation.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  "Meet and Greet" from the Airport
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Airport “Meet and Greet” reservations will require an additional fee. The Driver will meet the customer in baggage claim with a personalized sign/placard.
                    The Driver will assist the customer with luggage and proceed to the parking area to board the vehicle.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Short Notice Reservations
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Short notice reservations are reservations made less than two hours prior to requested pickup times.
                    We are unable to guarantee service availability or timely service for short notice reservations. Availability will depend on a variety of conditions, including pickup location, drop-off location, and current vehicle availability.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    There are no refunds available for reservations made with less than one hour advance notice.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Reservation Abandonment
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Reservation abandonment occurs when the Driver cannot find the customer at the designated pick-up location and cannot reach customer for further instruction using the contact number provided.
                </Typography>
                <Typography variant="h5" align="left" paragraph>
                    Rates
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Tolls, taxes and other fees may be not included in the calculated cost of the ride and customer may be responsible for additional charges.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Exclusive, Non-Stop Airport Transfers
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    These reservations include sedan and SUV service. A flat rate is quoted at the time of booking and is guaranteed so long as the reservation is not changed. Fees for additional stop requests are discussed below.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Charter Reservations
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Charters options include point to point or hourly transportation. Point to point reservations require a minimum charge plus distance-traveled charge and advance reservations.
                    Vehicles are available based on demand and cannot be guaranteed on short notice. Hourly charters require a two-hour minimum reservation and at least one hour advanced notice.
                    Hourly charter reservations should be made in advance to ensure availability.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Extra Stop Fee
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Customers may add an additional stop to an airport transfer or point to point reservation for an additional fee.
                    Extra stop fees vary and will be charged at Driver’s discretion. Extra Stop Fees do not apply to charter reservations. If an extra stop incurs additional miles, additional fees may apply.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Wait Fees
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Wait Fees are incurred when the customer is unable to go at the requested time and the vehicle’s operator must wait for more than a few minutes to provide service.
                    Fees are intended for waits that are usually excessive and wait fees are charged at the vehicle operator’s discretion.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Payments
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Customers must pay at time of booking to secure advance reservations. Any charges processed at the time of booking are refundable following the terms outlined in the Cancellation Policy below.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Receipts
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Web-based reservations have the option to receive an email confirmation with complete reservation and payment details.
                    For reservations made by phone or email receipts can be provided if needed.
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary" paragraph>
                    Safety
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Seatbelts
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Seatbelts are provided for customer safety. We require customers to wear safety belts while inside the vehicle, but it is the customer’s responsibility to ensure the seatbelt is securely fastened, as required by law.
                    Operators reserve the right to refuse service to parties out of compliance with applicable laws.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Vehicle Capacities
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Sedans typically seat 3 passengers with limited luggage space. SUVs seat 6 passengers with limited luggage space. Oversized or excess luggage may require a second vehicle at additional cost.
                    Seat capacity is limited to seats with working safety belts. State laws prohibit loading vehicles beyond seating capacity. Any attempt to do so may require additional vehicle reservations.
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                    Smoking
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Smoking is not permitted in any of our vehicles.
                </Typography>
                <Typography variant="h5" align="left" color="textPrimary" paragraph>
                    Special Handling
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Traveling with Children
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We welcome the opportunity to serve our younger travelers when accompanied by a responsible adult. If making an online reservation, please indicate the number of children traveling so we can reserve a seat.
                    State laws do not allow children to ride in the lap of an adult. If your child is under the minimum age/weight standards, you must supply an approved car seat for each child to whom the applicable law applies.
                    It is recommended that traveling parents and legal guardians become knowledgeable about the applicable laws in the states in which they will be traveling.
                    Operators reserve the right to refuse service to parties out of compliance with state law.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Traveling Minors
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Customers under the age of 16 must be accompanied by a parent or guardian for the entire duration of the ride. Operators may refuse service if a child is not old enough to ride alone and is without an adult or guardian.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Pets
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Pets are permitted in our vehicles with advance reservations. All pets, excluding service animals, must be kenneled.
                    Pets less than 25 pounds may be held in a lap carrier. Pets larger than 25 pounds must reserve SUV. All pets must be properly secured within the carrier at all times.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Service animals are permitted on vehicles. Please be mindful of the vehicle size while booking rides with a service animal.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    User Error
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Customer is responsible for providing accurate information at time of booking. When he/she provides information for travel, the customer agrees that the information will be accurate.
                    We are not responsible for mistakes made by customers while using the service or our official websites.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Travel Times and Delays
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We are not responsible for significant delays in anticipated arrival due to traffic, weather, or road conditions, or any other unforeseen circumstances.
                    Under such conditions, We reserve the right to cancel and refund reservations in advance of the scheduled pickup.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Customer Service Concerns
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    {'Customers are encouraged to '}<Link href="/contact" title="Contact">notify us</Link>{' of their experience, good or bad.'}
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Limitations on Compensation Following Service Failure
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Where it is determined to be company fault, customers may receive compensation in the form of a partial or complete refund, reservation credits, or through other means.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    In most cases where alternative transportation is taken and paid for by the customer, reimbursement will not include full refund of the original reservation but will reimburse the difference paid for the alternate mode of transportation over the original cost of the reservation with service.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Limitations on Compensation Following Missed Flights
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    When it is determined to be company fault, We may provide compensation not to exceed $200.00 per person for domestic and international flights.
                    We may reimburse for overnight lodging in the event customer cannot book a flight out on the same day of travel. Reimbursement is based on the average standard room rate as dictated by management in that market.
                    Meals and other expenses are not covered as part of reimbursement for delays or missed flights.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We do not assume any responsibility for lost income or potential income, and other losses resulting from missed professional or personal functions.
                    When traveling to an important event, it is recommended to allow extra travel time by booking earlier than the recommended time to avoid delays.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Limitations on Customer Claim Time
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    The Customer hereby acknowledges and agrees that, unless a longer period is mandated and made unwaiveble by law, any claim relating to the services provided to Customer hereunder, including, without limitation,
                    claims relating to damaged luggage, missed flight or other out of pocket expenses due to any alleged service failure, must be brought within 30 days after the occurrence of the act or omission that is the subject of the claim.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Refunds
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    For Credit Card Refunds: Once approved, a refund request is submitted within 24 hours, excluding weekends and federal holidays.
                    The refund is then completed by customer’s financial institution. Customer should refer to their financial institution to check on status of refund.
                </Typography>

                {/* Policies */}
                <Typography variant="h4" align="left" color="textPrimary" paragraph>
                    Policies
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Cancellation Policy
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Customers can cancel a reservation at any time up to one (2) hours before the scheduled pickup for a full fare refund using the website. Cancellations can also be made by calling 1 (619) 254-9269.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We will not provide a refund if the reservation is cancelled or changed less than 2 hours prior to pick-up time, or in the event of reservation abandonment. This includes bookings made within 2 hours of pickup time.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Flight Cancellations and Delays Due to Airlines:
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Failure to contact us with flight cancellation or delay information in a timely manner may be considered reservation abandonment and may result in forfeiture of fare.
                    Reservations impacted by airline delays and cancellations may qualify for refund when a replacement reservation is made.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Oversized and Extra Luggage Policy
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Our luggage policy closely follows that of airlines. For each passenger, two checked bags (e.g. suitcase, duffel bag) and two carry-on items (e.g. diaper bag, laptop case, backpack, or purse) all ride free.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    {'Extra fees may apply in the following instances. '}<Link href="/contact" title="Contact">Contact us</Link>{' for needs outside of those listed.'}
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Excess/Oversized Baggage – $10 fee per item
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />} Checked bag exceeds 50 pounds (or approximately 23 kilograms).
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    {<StopIcon style={{ fontSize: 'small' }} />} Total dimensions for your checked bag exceeds 80 inches when adding length, width, and height.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Golf Clubs – Varies
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Counts toward your total number of checked items. (e.g. If you have one checked bag and one set of clubs, the clubs are free.)
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Child Seat Policy
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We support the strongest safety standard by recommending that small children five years and under be secured in a child restraint seat for transportation.
                    If federal, state, or local law requires your child be secured in a child safety seat, please bring one as it is the parent’s or caregiver’s responsibility.
                    We do not provide child restraint seats and likely will not be able to provide service without one. Children under the age of 16 years old must be accompanied by an adult.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Service Animal/Pet Policy
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Our policy regarding the transport of animals is designed to ensure adequate space for the kennel(s), and your baggage.
                    All animals – excluding service animals – must be kenneled to board the vehicle. Kennel guidelines are as follows:
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    {<StopIcon style={{ fontSize: 'small' }} />}  Less than 25 pounds: Lap carrier permitted.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    {<StopIcon style={{ fontSize: 'small' }} />}  More than 25 pounds: Must reserve SUV.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textPrimary" component="p" gutterBottom>
                    Tipping Policy
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    For all online reservations 18% gratuity will be added to the final amount.
                </Typography>
                <Typography id="privacy" align="left" variant="h5" color="textPrimary" component="p" paragraph>
                    Privacy Policy
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We are committed to protecting your privacy. We want you to feel comfortable and confident when using our website, online reservation management system, and mobile application. 
                    This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our services. By visiting our website and purchasing our services, you are agreeing to our Terms and confirming that you have read and understood this policy, including how and why we use your information.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    We do not sell, trade, or rent your personal information to others. We need to process your personal information in order to provide our services. 
                    We use the information you provide to secure your reservation. In order to take a ride, you need to provide a pick-up address, drop-off address, valid email address, phone number, and credit card information.
                    In order to set up an account, you need to provide a valid email address, full name, phone number, and password. We may need to store encrypted credit card information and use it for both billing and payment purposes.
                    Your account information is protected by a password. It is important that you protect against unauthorized access to your account and information by choosing your password carefully and by keeping your password and computer secure.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    You agree that we can send you service-related communications, such as those related to rides, transactions, or your account. 
                    At some point in the future, we may use the information we collect to occasionally notify you about important functionality changes to the Web site, new services, and special offers we think you’ll find valuable.
                    If we do so, you’ll be provided an opportunity to unsubscribe from this mailing list.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Our services are not designed to appeal to children under the age of 13. We do not knowingly request or receive any information from children.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    Because we do not track our customers over time and across third-party websites, we do not respond to browser Do-Not-Track signals.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                    If you have questions or require more information about our Privacy Policy, do not hesitate to call or email us.
                </Typography>
                <Typography align="left" variant="subtitle1" color="textSecondary" component="p" paragraph>
                    Last update: May 16th, 2020.
                </Typography>
            </div>

            <Footer />

        </React.Fragment>
    );
}

export default Terms;
import { ImLocation } from 'react-icons/im'

const LocationPin = ({ text }) => (
    <div className="pin">
        <ImLocation className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)
export default LocationPin
import EventOfInterest from "./components/EventOfInterest";
import ProfileContainer from "./components/ProfileContainer";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import ServiceProcess from "./components/ServiceProcess";

export default function ProfilePage() {
    return (
        <div className="max-w-6xl mx-auto my-12 px-4">
            <ProfileContainer>
                <ProfileHeader />
                <ProfileInfo />
                <EventOfInterest />
                <ServiceProcess />
            </ProfileContainer>
        </div>
    );
}

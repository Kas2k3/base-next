import { Container } from "@mui/material";
import EventOfInterest from "./components/EventOfInterest";
import ProfileContainer from "./components/ProfileContainer";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import ServiceProcess from "./components/ServiceProcess";

export default function ProfilePage() {
    return (
        <Container maxWidth="lg" sx={{ my: 6 }}>
            <ProfileContainer>
                <ProfileHeader />
                <ProfileInfo />
                <EventOfInterest />
                <ServiceProcess />
            </ProfileContainer>
        </Container >
    );
}

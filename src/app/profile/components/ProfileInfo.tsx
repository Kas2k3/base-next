'use client';
const info = {
    fullName: 'Huynh Thanh Dat',
    dob: '08/26/1962',
    organization: 'Ministry of Science and Technology',
    position: 'Minister',
    country: 'Vietnam',
    phone: '0912345678',
};

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col min-w-[250px] flex-1">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <p className="text-base font-normal">{value}</p>
        </div>
    );
}

export default function ProfileInfo() {
    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-6">
                <InfoRow label="Full Name" value={info.fullName} />
                <InfoRow label="Date of birth" value={info.dob} />
            </div>
            <div className="flex flex-wrap gap-6">
                <InfoRow label="Organization" value={info.organization} />
                <InfoRow label="Position" value={info.position} />
            </div>
            <div className="flex flex-wrap gap-6">
                <InfoRow label="Country" value={info.country} />
                <InfoRow label="Phone number" value={info.phone} />
            </div>
        </div>
    );
}

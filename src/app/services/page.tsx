import { getTranslations } from 'next-intl/server';

const ServicesPage = async () => {
    const t = await getTranslations('servicesPage');

    return (
        <div className="pb-10 w-full pt-20">
            <div
                className="z-0 relative h-56 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url('https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg')`
                }}
            >
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <h1 className="relative text-white text-3xl font-bold z-10">{t('title')}</h1>
            </div>

            <p className="mt-4 text-center text-lg">{t('description')}</p>
        </div>
    );
};

export default ServicesPage;

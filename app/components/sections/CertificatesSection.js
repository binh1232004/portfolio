import CertificateEntity from "../CertificateEntity";

export default function CertificatesSection({ isVisible, certificatesData }) {
    return (
        <div
            className={`w-full max-w-6xl mx-auto px-4 transition-all duration-1000 delay-1000 mt-16 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
        >
            {" "}
            <h2 className="text-elegant-3xl md:text-elegant-5xl font-elegant-heading text-center mb-16 backdrop-blur-sm text-render-elegant">
                Certificates
            </h2>
            <div className="space-y-12">
                {certificatesData.map((cert, index) => (
                    <CertificateEntity
                        key={index}
                        date={cert.date}
                        title={cert.title}
                        badgeImage={cert.badgeImage}
                        badgeAlt={cert.badgeAlt}
                    />
                ))}
            </div>
        </div>
    );
}

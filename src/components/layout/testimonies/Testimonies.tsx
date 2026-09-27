import BenefitsDashboard from "@/components/layout/testimonies/BenefitsDashboard";

export default function Testimonies() {
    return (
        <section aria-label="Testimonies from leaders on how GDPT has impacted their life"
                 className="mt-(--home-page-section-margin-top)
                            mb-(--home-page-section-margin-bottom)
                            ml-(--home-page-section-margin-left)
                            mr-(--home-page-section-margin-right)
                            pl-(--home-page-section-padding-left)
                            pr-(--home-page-section-padding-right)
                            max-w-(--home-page-max-section-width)">

            <h3 className="font-bold text-(--primary) text-(length:--text-h3)">What We Offer</h3>

            <BenefitsDashboard />
        </section>
    );
}
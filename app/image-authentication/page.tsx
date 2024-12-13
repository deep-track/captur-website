'use client'

import React from 'react'
import Image from 'next/image';
import Footer from '@/components/landing-page/footer';
import { Navbar } from '@/components/landing-page/navbar'
import Banner from '@/components/layout/Banner';
import FeatureSection from '@/components/layout/featureSection';
import StatsSection from '@/components/layout/Statistic';
import InfoSection from '@/components/layout/infoSection';
import ExtraSection from '@/components/landing-page/extra-section';
import ExploreSection from '@/components/layout/Explore';

const ImageAuthenticationPage = () => {
  return (
    <div className="space-y-6">
      <Navbar />
      <FeatureSection
        title="Image Authentication"
        description="Detects everything from subtle edits to full synthetic generation."
        imageSrc='/image-9.svg'
      />
      <StatsSection
        description="Sophisticated AI-generated image forgeries are becoming increasingly accessible and widespread, posing significant risks across industries. Deeptrack advanced multi-layer detection shields you from deepfake-driven fraud, identity theft, and disinformation."
        statistics={[
          { value: '85%', description: 'of organizations globally are vulnerable to deepfake-enabled fraud' },
          { value: '75%', description: 'of African businesses face rising threats from manipulated images and misinformation' },
        ]}
      />
      <Banner
        banner={[
          { icon: '/svg-icons/detection.svg', title: 'Advanced Detection', description: 'Deeptrack leverages cutting-edge AI to identify manipulations at the pixel level, uncover hidden inconsistencies, and provide unparalleled accuracy in detecting deepfake and synthetic media threats.' },
          { icon: '/svg-icons/protection.svg', title: 'Fraud Protection', description: 'By exposing manipulated images, Deeptrack safeguards enterprises from fraud, enhancing security across key sectors such as finance, media, and public administration.' },
          { icon: '/svg-icons/injection.svg', title: 'Stop Injection Impersonations', description: 'Deeptrack enables reliable KYC verification and protects organizations against impersonation threats, helping to secure reputations, maintain trust, and prevent operational risks.' },
          { icon: '/svg-icons/platform.svg', title: 'Platform Agnostic', description: 'Our solution can be integrated into any pre-existing workflow to help organizations comply with regulatory standards, safeguard against disinformation, ensure accurate reporting, and maintain visual content integrity.' },
        ]}
      />
      <div className="absolute md:right-[10%] md:top-[15%] h-[15%] w-[20%]">
        <div className="relative h-full w-full">
          <div className="relative h-full w-full" />
          <div className="relative h-full w-full">
            <Image
              src="/feature_vector.svg"
              alt="Blue Lines"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <InfoSection
        title="Deeptrack Image Authentication"
        description="Deeptrack image authentication leverages advanced multi-layer AI detection to analyze images with precision. Our technology identifies manipulations at the pixel level, detecting techniques such as GAN-based image synthesis, face swapping, and other forms of synthetic media.
          Every image scan delivers actionable insights, including the likelihood of manipulation, helping organizations swiftly identify AI-generated alterations. Deeptrack platform also employs explainable AI, offering clear visualizations and detailed feedback to empower users in combating fraud and disinformation effectively.
          Designed to scale, Deeptrack supports everything from processing a few images to managing billions, ensuring flexibility for businesses of any size. Access our solution through an intuitive web interface or seamlessly integrate it into your workflows via API."
          imageSrc='/authenticate.svg'
      />
      <div>
        <ExploreSection
          types={[
            'Face Swap',
            'AI-Avatar',
            'Synthetic Faces',
            'Lip Sync',
            'AI-Generated Voice',
            'Face Re-enactment',
          ]}
        />
        <ExtraSection />
      </div>
      <Footer />
    </div>
  )
}

export default ImageAuthenticationPage;

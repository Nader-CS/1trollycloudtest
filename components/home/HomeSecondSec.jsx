import Image from "next/image";
import React from "react";
import Link from "next/link";
import colors from "@app/common/colors";

const HomeSecondSec = () => {
  return (
    <main
      style={{
        backgroundColor: colors.background,
        color:colors.dark_blue
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: colors.dark_blue,
          width: "60%",
          height: 100,
          borderRadius: "0 35px 35px 0",
        }}
      >
        <p className="text-white fs-3 fw-bold">Our Journey</p>
      </div>
      <div className="container d-flex flex-row">
        <div className="w-50 h-50 d-none d-lg-block"></div>
        <div className="d-flex flex-column m-5">
          <p className="my-5 w-75">
            Transformed from a B2C aggregator model to becoming an end to end
            digitization partner to enterprise businesses. We focus on
            digitizing demand signal, quick and cost efficient supply chain
            solutions and using blockchain to digitize b2b payments. We have
            successfully launched the 3rd largest coffee chain in the world
            across GCC, signed and are executing other enterprise partners in
            UAE and Saudi.
          </p>
          <div className="row ">
            <div className="col-lg-6 col-12">
              <p className="fw-bold">General Mission</p>
              <p>
                we create operational SaaS multi-tenant platform for service
                allocation and delivery management.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <p className="fw-bold">Core Elements</p>
              <p>
                service request allocation and delivery processing, payment
                gateway, service agents management, data integration platform,
                data connectivity/publishing management
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12">
              <p className="fw-bold">Core Market</p>
              <p>
                human/pet food delivery, HORECA, field service, merchandising
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <p className="fw-bold">Core User Roles Hierarchy</p>
              <p>
                governance (ceo, coo), provisioning (cfo, cmo, cso, ciso),
                operations (territory or functional managers), execution
                (workers, service agents, customers, etc)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: colors.dark_blue,
          width: "60%",
          height: 100,
          borderRadius: "0 35px 35px 0",
        }}
      >
        <p className="text-white fs-3 fw-bold">Why 1Trolley Business?</p>
      </div>
      <div className="container d-flex flex-row">
        <div className="w-50 h-50 d-none d-lg-block"></div>
        <div className="d-flex flex-column m-5">
          <div className="row mt-5 gap-5">
            <div className="bg-white col-lg-5 col-12 p-5 rounded-4 shadow  flex-grow-1">
              <Image
                src="/assets/images/Group 338@2x.png"
                alt="logo"
                width={100}
                height={60}
              />
              <p className="fw-bold">Employees:</p>
              <p>
                Partner with employees (Offer share options all across) / H&S
                first(Take initiative to ensure safety for employees and
                captains) / Individual development (Code training/ Cross
                functional experience/ Inclusion in wider discussions).
              </p>
            </div>
            <div className="bg-white col-lg-5 col-12 p-5 rounded-4 shadow flex-grow-1">
              <Image
                src="/assets/images/Group 336@2x.png"
                alt="logo"
                width={90}
                height={65}
              />
              <p className="fw-bold">Community:</p>
              <p>
                We enable local stores to digitize (From helping with digital
                assets to enabling full digital transformation from order to
                delivery, all the way to helping them better manage their
                financial well-being! ) We also help gig workers to solicit fair
                paying work on demand, aiming to extend fair benefits on a group
                bases where we have scale.
              </p>
            </div>
          </div>

          <div className="row my-5 gap-5">
            <div className="bg-white col-lg-5 col-12 p-5 rounded-4 shadow flex-grow-1">
              <Image
                src="/assets/images/Group 337@2x.png"
                alt="logo"
                width={75}
                height={75}
              />
              <p className="fw-bold">Customer:</p>
              <p>
                Provide innovation in solving user problems. (Widest choice of
                range/ widest choice of delivery & pick up/ Neighborhood stores
                within your palm.)
              </p>
            </div>
            <div className="bg-white col-lg-5 col-12 p-5 rounded-4 shadow flex-grow-1">
              <Image
                src="/assets/images/Layer_26@2x.png"
                alt="logo"
                width={75}
                height={75}
              />
              <p className="fw-bold">Planet:</p>
              <p>
                We push on green initiatives (fleet move to electric
                cars/Bicycles & foot delivery/ Recycling initiatives/ Less
                plastic use through blue box reuse and later on paper bags)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-100 text-center"
        style={{
          backgroundColor: colors.dark_blue,
          height: "570px",
        }}
      >
        <div className="py-5">
          <p className="text-white fw-bolder mt-4 h3">How can 1 Trolley Help?</p>
          <p
            className="text-white mx-auto mt-5"
            style={{ maxWidth: "500px", lineHeight: "1.4", opacity: "0.7" }}
          >
            Let us help you through your journey. We have four means to help by
            answering some of our questions below.
          </p>
        </div>
        <div className="mx-auto mt-3 " style={{width:'80%'}}>
        <Image
          src="/assets/images/howCan.png"
          alt="logo"
          width={1300}
          height={129}
          className="w-100 mb-5"
        />
        </div>
        <Link href="/" className="text-white nav-link mt-4 text-decoration-underline">
          View all
        </Link>
      </div>
    </main>
  );
};

export default HomeSecondSec;

import { ContentCard, TechStackCard } from "../components/BasicCards";
import Navigation from "../components/Navigation";

import ProjectScreenshot from "../components/ProjectScreenshot";
import { getImgPath } from "../helpers/basePath";

import appIcon from "../assets/bidbuddy_icon.png";
import csharpLogo from "../assets/CSharp.svg";
import databaseIcon from "../assets/Database.svg";
import testingIcon from "../assets/testing.png";

export default function BidBuddyPage() {
  return (
    <>
      <Navigation />

      <main>
        <div className="center-content text-content margin-top-100">
          <div className="icon-heading">
            <img className="icon-size-l" alt="Smart Home" src={appIcon} />
            <h1>BidBuddy</h1>
          </div>

          <p>
            BidBuddy is a desktop application for auctions. The project was
            created in the Software Product Development course and continued in
            the Testing and Quality of Software Products as a team project.
          </p>

          <ContentCard title="Key highlights">
            <ul className="margin-top-0">
              <li>
                Multi-layered architecture: entities, data access, business
                logic, presentation layer
              </li>
              <li>Written unit and integration tests using xUnit</li>
              <li>
                Written automated acceptance tests using Appium and Gherkin
                syntax
              </li>
            </ul>
          </ContentCard>

          <ContentCard className="margin-top-20" title="Features">
            <ul className="margin-top-0">
              <li>
                Authentication and authorisation, including admin and basic
                roles
              </li>
              <li>Auction creation and management</li>
              <li>Overview of auctions with sorting and filtering</li>
              <li>Placing bids on an auction</li>
              <li>Generating statistics about an auction</li>
              <li>Writing reviews after a successful auction</li>
              <li>User overview and management</li>
            </ul>
          </ContentCard>

          <ContentCard className="margin-top-20" title="My role in the team">
            <ul className="margin-top-0">
              <li>Application navigation</li>
              <li>Auction creation and management</li>
              <li>Payments (fake credit card transaction and virman)</li>
              <li>Managing regions and auction categories</li>
              <li>
                Written unit, integration and automated acceptance tests for my
                parts
              </li>
            </ul>
          </ContentCard>

          <h2>Technology stack</h2>
          <div className="tech-stack-list">
            <TechStackCard
              title="Application"
              text="C# WPF, Entity Framework ORM"
              image={csharpLogo}
            />
            <TechStackCard
              title="Testing"
              text="xUnit.net, Appium"
              image={testingIcon}
            />
            <TechStackCard
              title="Database"
              text="Microsoft SQL Server"
              image={databaseIcon}
            />
          </div>

          <h2 id="gallery" className="fragment-nav-target">
            Project gallery
          </h2>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Overview of active auctions"
              src={getImgPath("BidBuddy/auctions.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Auction creation"
              src={getImgPath("BidBuddy/create_auction.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Auction management (user can confirm payment)"
              src={getImgPath("BidBuddy/manage_auction.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Showing payment information"
              src={getImgPath("BidBuddy/payment.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Management of auction categories"
              src={getImgPath("BidBuddy/categories.png")}
            />
          </div>
        </div>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}


import { WebsiteStatusTable } from '@/components/WebsiteStatusTable';
import { websiteData } from '@/data/websites'; // Ensure this path is correct

export default function Home() {
  const mainWebsites = websiteData.filter(site => site.category === 'Main');
  const userWebsites = websiteData.filter(site => site.category === 'User');
  const otherWebsites = websiteData.filter(site => site.category === 'Others');

  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="text-center mb-10 md:mb-16 p-6 md:p-8 bg-card shadow-xl rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Hi, this is the HF permanent site.
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-4">
            Bookmark me so you won't lose your way!
          </p>
          <hr className="my-4 border-border/50" />
          <p className="text-md md:text-lg text-foreground/80">
            They share the same database. Just log in with your existing account.
          </p>
        </header>

        <main className="space-y-10 md:space-y-12">
          {mainWebsites.length > 0 && (
            <section aria-labelledby="main-websites-heading">
              <WebsiteStatusTable title="Main Websites" websites={mainWebsites} />
            </section>
          )}
          {userWebsites.length > 0 && (
            <section aria-labelledby="user-websites-heading">
              <WebsiteStatusTable title="User Websites" websites={userWebsites} />
            </section>
          )}
          {otherWebsites.length > 0 && (
            <section aria-labelledby="other-websites-heading">
             <WebsiteStatusTable title="Other Websites" websites={otherWebsites} />
            </section>
          )}
          {websiteData.length === 0 && (
            <div className="text-center py-10">
              <p className="text-xl text-muted-foreground">No websites configured yet.</p>
              <p className="text-sm text-muted-foreground mt-2">Please contact an administrator to add websites to the status page.</p>
            </div>
          )}
        </main>
      </div>
      <footer className="text-center py-6 bg-card/50 border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} HF Status. All rights reserved.</p>
      </footer>
    </div>
  );
}

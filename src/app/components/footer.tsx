import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-4xl border-t items-center justify-between px-4 py-4">
        <Contact />
        <NavBottom />
      </div>
    </footer>
  );
}

function Contact() {
  return (
      <Link
        href={"https://x.com/faiqthirapi"}
        className="flex items-center space-x-2"
      >
        <span className="text-sm">X (Twitter)</span>
      </Link>
  );
}

function NavBottom() {
  return (
    <div className="flex items-center space-x-4">
      <nav className="flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              item.active ? "text-primary" : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

const navItems = [
  {
    name: "Github",
    href: "https://github.com/thirapi/site",
    active: true,
  },
];

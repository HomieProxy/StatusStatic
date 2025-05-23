
"use client";
import Link from 'next/link';
import { CheckCircle2, XCircle, Wrench, ExternalLink } from 'lucide-react';
import type { WebsiteEntry } from '@/data/websites'; // Ensure this path is correct
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WebsiteStatusTableProps {
  title: string;
  websites: WebsiteEntry[];
}

const StatusIcon = ({ status }: { status: WebsiteEntry['status'] }) => {
  switch (status) {
    case 'available':
      return <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" aria-label="Available" />;
    case 'unavailable':
      return <XCircle className="h-5 w-5 text-red-600 dark:text-red-500" aria-label="Unavailable" />;
    case 'maintenance':
      return <Wrench className="h-5 w-5 text-yellow-600 dark:text-yellow-500" aria-label="Maintenance" />;
    default:
      return null;
  }
};

const StatusBadge = ({ status }: { status: WebsiteEntry['status'] }) => {
  const text = status.charAt(0).toUpperCase() + status.slice(1);

  switch (status) {
    case 'available':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-700 dark:text-green-100 dark:hover:bg-green-600 capitalize border border-green-300 dark:border-green-600">{text}</Badge>;
    case 'unavailable':
      // Using destructive variant which is red by theme.
      return <Badge variant="destructive" className="capitalize">{text}</Badge>;
    case 'maintenance':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-700 dark:text-yellow-950 dark:hover:bg-yellow-600 capitalize border border-yellow-300 dark:border-yellow-600">{text}</Badge>;
    default:
      return <Badge variant="outline" className="capitalize">{text}</Badge>;
  }
};

export function WebsiteStatusTable({ title, websites }: WebsiteStatusTableProps) {
  if (websites.length === 0) {
    return null;
  }

  return (
    <Card className="shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="bg-card/50 border-b">
        <CardTitle className="text-2xl text-primary font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[65%] pl-6 py-4">Website</TableHead>
              <TableHead className="text-right pr-6 py-4">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {websites.map((site) => (
              <TableRow key={site.id} className="hover:bg-muted/50 transition-colors duration-150">
                <TableCell className="font-medium pl-6 py-4">
                  <Link 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-foreground hover:text-primary hover:underline transition-colors duration-150 group"
                    aria-label={`Visit ${site.name} (opens in a new tab)`}
                  >
                    {site.name}
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                  </Link>
                </TableCell>
                <TableCell className="text-right pr-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <StatusIcon status={site.status} />
                    <StatusBadge status={site.status} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

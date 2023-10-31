import { Post } from "../types";

type PostsByWeek = {
  [key: number]: Post[];
};

export const postsByWeek = (posts: Post[]) => {
  const postsGroupedByWeekNumber = postsByWeekNumber(posts);
  return formattedPostsByWeek(postsGroupedByWeekNumber);
};

export const postsByWeekNumber = (posts: Post[]) => {
  const res = posts.reduce((acc: PostsByWeek, post: Post) => {
    const postDate: Date = new Date(post.time * 1000); // Convert timestamp to milliseconds
    const weekNumber: number = getWeekNumber(postDate); // Function to get week number
    if (!acc[weekNumber]) {
      acc[weekNumber] = [];
    }
    acc[weekNumber].push(post);
    return acc;
  }, {});
  return res;
};

function getWeekNumber(date: Date): number {
  // Function to get the week number of a date
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart: Date = new Date(d.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return weekNumber;
}

const formattedPostsByWeek = (postsByWeek: PostsByWeek) => {
  const res = Object.entries(postsByWeek).map(([week, weekPosts]) => {
    const startDate = getStartDate(Number(week));
    const endDate = getEndDate(Number(week));
    const dateLabel = createWeekLabel(startDate, endDate);
    return {
      label: dateLabel,
      children: weekPosts,
    };
  });
  return res;
};

const createWeekLabel = (startDate: Date, endDate: Date) => {
  return `${startDate.toDateString()} - ${endDate.toDateString()}`;
};

function getStartDate(weekNumber: number) {
  // Function to calculate the start date of a week
  const date = new Date();
  date.setDate(1 + (weekNumber - 1) * 7);
  return date;
}

function getEndDate(weekNumber: number) {
  // Function to calculate the end date of a week
  const startDate = getStartDate(weekNumber);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  return endDate;
}

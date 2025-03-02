// utils/checkBlacklist.ts
export const isBlacklisted = (discordId: string): boolean => {
  // List of blacklisted Discord IDs
  const blacklistedIds = ["blacklistedDiscordId1", "blacklistedDiscordId2"];

  return blacklistedIds.includes(discordId);
};

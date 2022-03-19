import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// solutions for debugging in java
public class Solution {
  public static void main(String[] args) {
    // int result = coinChange1(new int[] { 2 }, 3);
    combinationSum(new int[] { 2, 3, 6, 7 }, 6);
  }

  public static int coinChange(int[] coins, int amount) {
    if (amount < 1)
      return 0;
    return coinChange(coins, amount, new int[amount]);
  }

  public static int coinChange1(int[] coins, int amount) {
    int max = amount + 1;
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, max);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
      for (int j = 0; j < coins.length; j++) {
        if (coins[j] <= i) {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
    return dp[amount] > amount ? -1 : dp[amount];
  }

  private static int coinChange(int[] coins, int rem, int[] count) {
    if (rem < 0)
      return -1;
    if (rem == 0)
      return 0;
    if (count[rem - 1] != 0)
      return count[rem - 1];
    int min = Integer.MAX_VALUE;
    for (int coin : coins) {
      int res = coinChange(coins, rem - coin, count);
      if (res >= 0 && res < min)
        min = 1 + res;
    }
    count[rem - 1] = (min == Integer.MAX_VALUE) ? -1 : min;
    return count[rem - 1];
  }

  public static List<List<Integer>> combinationSum(int[] nums, int target) {
    List<List<Integer>> list = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(list, new ArrayList<>(), nums, target, 0);
    return list;
  }

  private static void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums, int remain, int start) {
    if (remain < 0)
      return;
    else if (remain == 0)
      list.add(new ArrayList<>(tempList));
    else {
      for (int i = start; i < nums.length; i++) {
        tempList.add(nums[i]);
        backtrack(list, tempList, nums, remain - nums[i], i); // not i + 1 because we can reuse same elements
        tempList.remove(tempList.size() - 1);
      }
    }
  }
}
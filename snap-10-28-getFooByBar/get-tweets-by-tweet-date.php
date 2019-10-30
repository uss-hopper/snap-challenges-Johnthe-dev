<?php
/**
 * gets all tweets that were posted on tweet day
 *
 * @param PDO $pdo
 * @param DateTime $tweetDate
 * @return SplFixedArray
 */
function getTweetByTweetDate(\PDO $pdo, DateTime $tweetDate): \SplFixedArray {
	// Validate the date using the ValidateDate trait NOT NECESSARY
	try {
		$tweetDate = self::validateDateTime($tweetDate);
	} catch(\InvalidArgumentException | \RangeException |\Exception | \TypeError $exception) {
		$exceptionType = get_class($exception);
		throw(new $exceptionType($exception->getMessage(), 0, $exception));
	}

	//start date and end date
	$startDateString = date("Y-m-d")." 00:00:00";
	$startDate = new DateTime($startDateString);
	$endDate = new DateTime($startDateString);
	$endDate->add(new DateInterval('P1D'));

	//create query template
	$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate >= :startDate AND tweetDate < :endDate";
	$statement = $pdo->prepare($query);
	//bind the tweet date to the place holder in the template
	$parameters = ["startDate" => $startDate->format("Y-m-d H:i:s.u"),"endDate" => $endDate->format("Y-m-d H:i:s.u")];
	$statement->execute($parameters);
	//build an array of tweets
	$tweets = new \SplFixedArray($statement->rowCount());
	$statement->setFetchMode(\PDO::FETCH_ASSOC);
	while($row = $statement->fetch() !== false) {
		try {
			$tweet = new Tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
			$tweets[$tweets->key()] = $tweet;
			$tweets->next();
		} catch(\Exception $exception) {
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}
	}
	return $tweets;
}
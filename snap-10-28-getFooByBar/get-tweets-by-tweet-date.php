<?php

function getTweetsByTweetDate(\PDO $pdo, DateTime $tweetDate): \SplFixedArray {
	// Validate the date using the ValidateDate trait
	try {
		$tweetDate = self::validateDateTime($tweetDate);
	} catch(\InvalidArgumentException | \RangeException |\Exception | \TypeError $exception) {
		$exceptionType = get_class($exception);
		throw(new $exceptionType($exception->getMessage(), 0, $exception));
	}

	//create query template
	$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate = :tweetDate";
	$statement = $pdo->prepare($query);
	//bind the tweet date to the place holder in the template
	$parameters = ["tweetDate" => $tweetDate];
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
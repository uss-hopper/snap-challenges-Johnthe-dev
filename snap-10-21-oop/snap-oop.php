<?php

namespace JohnTheDev\WitchyWoman;

class WitchyWoman {
	/**
	 * @var string $witchyWomanId
	 */
	private $witchyWomanId;
	/**
	 * @var string $witchyWomanMoonInHerEyes
	 */
	private $witchyWomanMoonInHerEyes;

	/**
	 * WitchyWoman constructor.
	 * @param $newWitchyWomanId
	 * @param $newWitchyWomanMoonInHerEyes
	 */
	public function __construct($newWitchyWomanId, $newWitchyWomanMoonInHerEyes) {

		try {
			$this->setWitchyWomanId($newWitchyWomanId);
			$this->setWitchyWomanMoonInHerEyes($newWitchyWomanMoonInHerEyes);
		} catch(\TypeError $exception) {
			$exceptionType = get_class($exception);
			throw(new $exceptionType($exception->getMessage(), 101, $exception));
		}
	}

	/**
	 * @return string $witchyWomanId
	 */
	public function getWitchyWomanId(): string {
		return ($this->witchyWomanId);
	}

	/**
	 * @param string $witchyWomanId
	 */
	public function setWitchyWomanId(string $newWitchyWomanId) {
		$this->witchyWomanId = $newWitchyWomanId;
	}

	/**
	 * @return string $witchyWomanMoonInHerEyes
	 */
	public function getWitchyWomanMoonInHerEyes(): string {
		return ($this->witchyWomanMoonInHerEyes);
	}

	/**
	 * @param string $WitchyWomanMoonInHerEyes
	 */
	public function setWitchyWomanMoonInHerEyes(string $newWitchyWomanMoonInHerEyes) {
		$this->witchyWomanMoonInHerEyes = $newWitchyWomanMoonInHerEyes;
	}
	public function switchWitchyWomanAttributes() {
		$witchyWomanIdMessage = $this->getWitchyWomanId();
		$witchyWomanMoonInHerEyesMessage = $this->getWitchyWomanMoonInHerEyes();
		$this->setWitchyWomanId($witchyWomanMoonInHerEyesMessage);
		$this->setWitchyWomanMoonInHerEyes($witchyWomanIdMessage);
	}
}

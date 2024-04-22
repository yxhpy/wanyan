import threading


class ThreadSafeAutoIncrementDict:
    def __init__(self):
        self._dict = {}
        self._counter = 0
        self._lock = threading.Lock()

    def insert(self, value):
        with self._lock:
            self._dict[self._counter] = value
            self._counter += 1
            return self._counter - 1

    def get_dict(self):
        with self._lock:
            return dict(self._dict)

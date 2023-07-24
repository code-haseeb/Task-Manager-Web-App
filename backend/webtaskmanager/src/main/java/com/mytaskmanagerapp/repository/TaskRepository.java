// TaskRepository.java

package com.mytaskmanagerapp.repository;

import com.mytaskmanagerapp.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}
